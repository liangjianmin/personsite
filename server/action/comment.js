var comment = require("../models/comment.js");
var moment = require('moment'); //时间
var util = require('util');

module.exports = function (app) {

    /**
     * 保存用户评论,更新shop表的evaluate字段的平均值统计
     */
    app.post('/savecomment', function (req, res, next) {
        comment.addComment({
            data: {
                desc: req.body.desc,
                time: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
                evaluate: req.body.evaluate,
                user: '××某',
                shopid: req.body.shopid
            },
            sql: "INSERT INTO comment SET ?"
        }, function (data) {
            if (data.status) {
                comment.updateShopComment(req.body.shopid,{
                    sql: 'UPDATE shop SET evaluate = (SELECT AVG(evaluate) FROM comment s WHERE s.shopid='+req.body.shopid+') WHERE id='+req.body.shopid
                }, function (datas) {
                    res.send(datas);
                })
                res.send(data);
            }
        });
    });
    /**
     * 获取评论列表 id:关联的商品id
     */
    app.get('/getcomment', function (req, res) {
        var id = req.query.id;
        comment.getComment(id, function (data) {
            if (data.status) {
                res.send(data);
            } else {
                res.send(500)
            }
        });
    });
};
