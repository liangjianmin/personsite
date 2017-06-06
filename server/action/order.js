var shop = require("../models/shop.js");
var comment = require("../models/comment.js");
var order = require("../models/order.js");
var moment = require('moment'); //时间
var multiparty = require('multiparty'); //文件操作模块
var util = require('util');
var fs = require('fs');
var orderutil = require("../util/index.js");
module.exports = function (app) {
    /**
     * 保存用户订单信息
     */
    app.post('/ordersave', function (req, res, next) {
        const orderuid = orderutil.orederNumber(req.body.shopnumber);
        order.savaoreder({
            data: {
                shopname: req.body.shopname,
                price: req.body.price,
                total: req.body.total,
                shopnum: req.body.shopnum,
                username: req.body.username,
                userid:req.body.userid,
                orderuid: orderuid,
                status: 0,
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
     *  上传文件
     */
};
