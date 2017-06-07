var shop = require("../models/shop.js");
var comment = require("../models/comment.js");
var order = require("../models/order.js");
var moment = require('moment'); //时间
var multiparty = require('multiparty'); //文件操作模块
var util = require('util');
var client = require("../util/redis.js");//缓存操作模块
var orderutil = require("../util/index.js");
var shop = require("../models/shop.js");

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
        userid: req.body.userid,
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
   * 结算付款
   */
  app.post('/pay', function (req, res, next) {
    var id = req.body.orderid;
    const uuid = orderutil.payNumber(id);
    order.getOrder(id, function (data) {
      if (data.status) {
        client.hmset('orderid', {id: id, time: orderutil.time()}, function (err) {
          if (err) {
            return;
          }
        })
        res.send({
          uuid: uuid,
          status: true
        });
      }
    })
  });
  /**
   *  支付
   */
  app.post('/dopay', function (req, res, next) {
    var id = req.body.orderid;
    if (id) {
      client.hgetall('orderid', function (err, object) {
        if (err) {
          console.log(err);
        } else {
          if (id == object.id) {
            order.getOrder(id, function (data) {
              if (data.status) {
                res.send({
                  data: data.data,
                  end: object.time,
                  status: true
                });
              }
            })
          } else {
            res.send({
              data: {
                status: false
              }
            })
          }
        }
      })
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
            })
            res.send({status:true,time:orderutil.time()});
          }
        });
      }
    });
  });
};
