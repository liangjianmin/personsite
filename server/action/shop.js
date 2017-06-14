var shop = require("../models/shop.js");
var comment = require("../models/comment.js");
var carsutil = require("../util/index.js");
var moment = require('moment'); //时间
var multiparty = require('multiparty'); //文件操作模块
var util = require('util');
var fs = require('fs');
var client = require("../util/redis.js");//缓存操作模块


module.exports = function (app) {
    /**
     * shop表添加商品信息且记录库存，同时更新stock表的库存统计
     */
    app.post('/shopsave', function (req, res, next) {
        shop.addShop({
            data: {
                shopname: req.body.shopname,
                price: req.body.price,
                describes: req.body.describes,
                evaluate: req.body.evaluate,
                stocknum: req.body.stocknum,
                imgid: req.body.imgid,
                type: req.body.type,
                shopnumber: req.body.shopnumber,
                storagetime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss")
            },
            sql: "INSERT INTO shop SET ?"
        }, function (data) {
            if (data.status) {
                shop.updateStock({
                    sql: `UPDATE stock SET total = (SELECT SUM(stocknum) FROM shop), 
                    typecostume = (SELECT SUM(stocknum) FROM shop s WHERE s.type = 0),
                    typeelectrical = (SELECT SUM(stocknum) FROM shop s WHERE s.type = 1),
                    typedigital = (SELECT SUM(stocknum) FROM shop s WHERE s.type = 2)`
                }, function (data) {
                })
                res.send(data);
            }
        });
    });
    /**
     *  上传文件
     */
    app.post('/shopupload', function (req, res, next) {
        //生成multiparty对象，并配置上传目标路径
        var form = new multiparty.Form({uploadDir: '../dist/static/upload/shop/'});
        //上传完成后处理
        form.parse(req, function (err, fields, files) {
            var filesTmp = JSON.stringify(files, null, 2);
            if (err) {
                console.log('parse error: ' + err);
            } else {
                var inputFile = files.inputFile[0];
                var uploadedPath = inputFile.path;
                var dstPath = '../dist/static/upload/shop/' + inputFile.originalFilename;
                //重命名为真实文件名
                fs.rename(uploadedPath, dstPath, function (err) {
                    if (err) {
                        console.log('rename error: ' + err);
                    } else {
                        /**
                         * 记录用户name
                         * callback id关联其他表
                         */
                        if (req.session.user) {
                            shop.addPic({
                                data: {
                                    url: inputFile.originalFilename,
                                    from: req.session.user,
                                  time: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
                                    desc: 'shop table use'

                                },
                                sql: "INSERT INTO pics SET ?"
                            }, function (data) {
                                res.send(data);
                            })
                        } else {
                            res.send({staus: false, msg: '请登录'});
                        }
                    }
                });
            }
        });
    });
    /**
     * 删除商品
     */
    app.post('/deleteShop', function (req, res, next) {
        shop.deleteShops({
            sql: "DELETE FROM shop WHERE id = " + req.body.id
        }, function (data) {
            res.send(data);
        });
    });
    /**
     * 更新商品列表&更新库存表
     */
    app.post('/shopupdate', function (req, res, next) {
        shop.updateShop({
            sql: "update shop SET shopname=?,price=?,describes=?,evaluate=?,imgid=?,stocknum=?,shopnumber=?,type=?,storagetime=? WHERE id = ?",
            params: [
                req.body.shopname,
                req.body.price,
                req.body.describes,
                req.body.evaluate,
                req.body.imgid,
                req.body.stocknum,
                req.body.shopnumber,
                req.body.type,
                moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
                req.body.id
            ]
        }, function (data) {
            if (data.status) {
                shop.updateStock({
                    sql: `UPDATE stock SET total = (SELECT SUM(stocknum) FROM shop), 
                    typecostume = (SELECT SUM(stocknum) FROM shop s WHERE s.type = 0),
                    typeelectrical = (SELECT SUM(stocknum) FROM shop s WHERE s.type = 1),
                    typedigital = (SELECT SUM(stocknum) FROM shop s WHERE s.type = 2)`
                }, function (data) {
                })
                res.send(data);
            }
        });
    });
    /**
     * 获取id商品详情 && 评论列表
     */
    app.get('/getshop', function (req, res) {
        //获取详情页面id
        var p = req.query.id;
        //获取点击结算的参数
        var r = req.query.r;
        //解析缓存中用户存储的数据
        if (r != undefined) {
            client.hgetall('cars', function (err, object) {
                if (err) {
                    console.log(err);
                } else {
                    if (r === object.params) {
                        p = object.id;
                        shop.getshop(p, function (data) {
                            if (data.status) {
                                comment.getComment(p, function (commentdata) {
                                    if (commentdata.status) {
                                        comment.getCommentNum(p, function (numdata) {
                                            if (numdata.status) {
                                                res.send({
                                                    data: {
                                                        shop: data.data,
                                                        comment: commentdata.data,
                                                        commentnum: numdata.data[0].count,
                                                        status: data.status,
                                                        selnum: object.num,
                                                        user: object.user,
                                                        userid: object.userid,
                                                        uuid: object.params
                                                    }
                                                });
                                            }
                                        });
                                    }
                                })
                            } else {
                                res.send(500);
                            }
                        });
                    } else {
                        res.send({
                            data: {
                                status: false
                            }
                        })
                    }
                }
            })
        } else {
            shop.getshop(p, function (data) {
                if (data.status) {
                    comment.getComment(p, function (commentdata) {
                        if (commentdata.status) {
                            comment.getCommentNum(p, function (numdata) {
                                if (numdata.status) {
                                    res.send({
                                        data: {
                                            shop: data.data,
                                            comment: commentdata.data,
                                            commentnum: numdata.data[0].count,
                                            status: data.status
                                        }
                                    });
                                }
                            });
                        }
                    })
                } else {
                    res.send(500);
                }
            });
        }
    });
    /**
     * 查询库存数量
     */
    app.get('/stock', function (req, res) {
        shop.getStock(function (data) {
            if (data.status) {
                res.send(data);
            } else {
                res.send(500);
            }
        });
    });
    /**
     * p:分页
     * type：分类列表
     * 获取商品列表，分类列表
     * type 列表 0,1,2分类
     * type 3 全部列表
     */
    app.get('/shoplist', function (req, res) {
        var p = req.query.p;
        var type = req.query.type;
        var limit = 6;
        var count;
        var totalPages;
        if (type != undefined) {
            if (type == 3) {
                shop.getShopCount(function (data) {
                    if (data.status) {
                        count = data.data[0].count;
                        totalPages = Math.ceil(data.data[0].count / limit);
                    }
                    shop.getShops((p - 1) * limit, limit, function (data) {
                        if (data.status) {
                            res.send({list: data, maxPage: totalPages, currage: p, count: count, limit: limit});
                        } else {
                            res.send(500);
                        }
                    });
                })
            } else {
                shop.getTypeShopCount(type, function (data) {
                    if (data) {
                        count = data.data[0].count;
                        totalPages = Math.ceil(data.data[0].count / limit);
                    }
                    shop.getTypeShops((p - 1) * limit, limit, type, function (data) {
                        if (data.status) {
                            res.send({list: data, maxPage: totalPages, currage: p, count: count, limit: limit});
                        } else {
                            res.send(500);
                        }
                    });
                })
            }
        } else {
            shop.getShopCount(function (data) {
                if (data) {
                    count = data.data[0].count;
                    totalPages = Math.ceil(data.data[0].count / limit);
                }
                shop.getShops((p - 1) * limit, limit, function (data) {
                    if (data.status) {
                        res.send({list: data, maxPage: totalPages, currage: p, count: count, limit: limit});
                    } else {
                        res.send(500);
                    }
                });
            })
        }
    });

    /**
     *解析购买结算信息
     */
    app.post('/cars', function (req, res) {
        var shopid = req.body.id;//保存商品id
        var num = req.body.num;//保存用户选择的商品个数
        var userid = req.body.userid;//保存用户id
        var user = req.body.user;//保存用户名字
        var cars = carsutil.carsNumber(shopid, num, userid, user);
        //缓存用户的选择信息
        client.hmset('cars', cars, function (err) {
            if (err) {
                return;
            }
        })
        res.send({r: cars.params});
    });

    /**
     *搜索商品数据
     */
    app.get('/search', function (req, res) {
        var p = req.query.p;
        var like = req.query.like;
        var limit = 4;
        var count;
        var totalPages;

        shop.searchCount(like,function (data) {
            if (data) {
                count = data.data[0].count;
                totalPages = Math.ceil(data.data[0].count / limit);
            }
            shop.searchshop((p - 1) * limit, limit, like, function (data) {
                if (data.status) {
                    res.send({list: data, maxPage: totalPages, currage: p, count: count, limit: limit});
                } else {
                    res.send(500);
                }
            });
        });
    });
};
