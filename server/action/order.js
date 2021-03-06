var shop = require("../models/shop.js");
var comment = require("../models/comment.js");
var order = require("../models/order.js");
var moment = require('moment'); //时间
var multiparty = require('multiparty'); //文件操作模块
var util = require('util');
var client = require("../util/redis.js");//缓存操作模块
var orderutil = require("../util/index.js");
var shop = require("../models/shop.js");
var crypto = require('crypto');//加密


module.exports = function (app) {
    /**
     * 保存用户订单信息
     * 字段status 1:初始状态表示未付款
     */
    app.post('/ordersave', function (req, res, next) {
        const orderuid = orderutil.orederNumber();
        order.savaoreder({
            data: {
                shopname: req.body.shopname,
                price: req.body.price,
                total: req.body.total,
                shopnum: req.body.shopnum,
                username: req.body.username,
                userid: req.body.userid,
                orderuid: orderuid,
                status: 1,
                shopid: req.body.id,
                ordertime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss")
            },
            sql: "INSERT INTO `order` SET ?"
        }, function (data) {
            if (data.status) {
                //判断如果商品库存为0的时候删除该商品
                if (req.body.stocknum == 0) {
                    shop.deleteShops({
                        sql: "DELETE FROM shop WHERE id = " + req.body.id
                    }, function (shopdata) {
                        if (shopdata.status) {
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
                } else {
                    order.updateShop({
                        sql: "update shop SET stocknum=?,outstocktime=? WHERE id = ?",
                        params: [
                            req.body.stocknum,
                            moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
                            req.body.id
                        ]
                    }, function (shopdata) {
                        if (shopdata.status) {
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
                }
            }
        });
    });

    /**
     * 结算付款
     */
    app.post('/pay', function (req, res, next) {
        var id = req.body.orderid;
        var uuid = orderutil.payNumber();
        var md5 = crypto.createHash('md5');
        md5.update(id.toString());
        var sign = md5.digest('hex');//生成的sign
        var timestamp = orderutil.time();//记录当前订单的付款结束时间
        //记录sign字段
        order.updateOrderSign({
            sql: "update `order` SET sign=?,timestamp=? WHERE id = ?",
            params: [
                sign,
                timestamp,
                id
            ]
        }, function (signdata) {
            if (signdata.status) {
                res.send({sign: sign, status: true, uuid: uuid})
            }
        });
    });
    /**
     *  支付匹配sign
     */
    app.post('/dopay', function (req, res, next) {
        var id = req.body.orderid;
        if (id) {
            order.getOrder(id, function (data) {
                if (data.status) {
                    res.send({
                        data: data.data,
                        status: true
                    });
                }
            })
        } else {
            res.send({
                status: false
            });
        }
    });

    /**
     * 处理订单失效,恢复库存容量
     */
    app.post('/orderinvalid', function (req, res, next) {
        var shopid = req.body.shopid;
        var shopnum = req.body.shopnum;
        shop.getstocknum(shopid, function (data) {
            if (data.status) {
                var tempstocknum = parseInt(data.data[0].stocknum + shopnum);
                order.updateShop({
                    sql: "update shop SET stocknum=? WHERE id = ?",
                    params: [
                        tempstocknum,
                        req.body.shopid
                    ]
                }, function (shopdata) {
                    if (shopdata.status) {
                        shop.updateStock({
                            sql: `UPDATE stock SET total = (SELECT SUM(stocknum) FROM shop), 
                      typecostume = (SELECT SUM(stocknum) FROM shop s WHERE s.type = 0),
                      typeelectrical = (SELECT SUM(stocknum) FROM shop s WHERE s.type = 1),
                      typedigital = (SELECT SUM(stocknum) FROM shop s WHERE s.type = 2)`
                        }, function (data) {
                            if (data.status) {
                                order.deleteOrder({
                                    sql: "DELETE FROM `order`  WHERE id = " + req.body.id
                                }, function (data) {
                                    console.log(data)
                                });
                                res.send({status: true, time: orderutil.time()});
                            }
                        })
                    }
                });
            }
        });
    });

    /**
     * 显示用户的订单
     */
    app.get('/order', function (req, res, next) {
        var p = req.query.p;
        var userid = req.query.userid;
        var status = req.query.type; //status 默认0
        var limit = 4;
        var count;
        var totalPages;
        if (status == 0) {
            order.getOrderCount(userid, function (data) {
                if (data.status) {
                    count = data.data[0].count;
                    totalPages = Math.ceil(data.data[0].count / limit);
                }
                order.getOrders((p - 1) * limit, limit, userid, function (data) {
                    if (data.status) {
                        res.send({list: data, maxPage: totalPages, currage: p, count: count, limit: limit});
                    } else {
                        res.send(500);
                    }
                });

            });
        } else {
            order.getOrderStatusCount(status, userid, function (data) {
                if (data.status) {
                    count = data.data[0].count;
                    totalPages = Math.ceil(data.data[0].count / limit);
                }
                order.getOrderstatus((p - 1) * limit, limit, status, userid, function (data) {
                    if (data.status) {
                        res.send({list: data, maxPage: totalPages, currage: p, count: count, limit: limit});
                    } else {
                        res.send(500);
                    }
                })
            })
        }
    });
};
