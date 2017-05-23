var comment = require("../models/comment.js");
var moment = require('moment'); //时间
var util = require('util');

module.exports = function (app) {
    /**
     * 获取评论列表 id:关联的商品id
     */
    app.get('/getcomment', function (req, res) {
        var id=req.query.id;
        comment.getComment(id,function (data) {
            if(data.status){
                res.send(data);
            }else{
                res.send(500)
            }
        });
    });
};
