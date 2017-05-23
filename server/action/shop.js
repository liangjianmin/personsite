var shop = require("../models/shop.js");
var moment = require('moment'); //时间
var multiparty = require('multiparty'); //文件操作模块
var util = require('util');
var fs = require('fs');

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
                                    desc: "shop table use",
                                    time: moment(new Date()).format("YYYY-MM-DD HH:mm:ss")
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
};
