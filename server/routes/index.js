var action_user = require("../action/user.js");
var shop = require("../action/shop.js");
var comment=require("../action/comment.js");

var conn_user = require("../models/user.js");
var shop_view = require("../models/shop.js");
var comment_model = require("../models/comment.js");
module.exports = function (app) {
    /**
     * 获取用户
     */
    app.get('/page', function (req, res) {
        conn_user.getUsers(function (data) {
            if (data.status) {
                res.send(data);
            } else {
                res.send(500);
            }
        });
    });

    /**
     * 获取id用户
     */
    app.get('/getuser', function (req, res) {
        conn_user.getUsers(function (data) {
            var id = req.query.id;
            var userdata = {};
            if (data.status) {
                userdata = data.data.filter(function (value) {
                    return value['id'] == id;
                })
                res.send({data: userdata});
            } else {
                res.send(500);
            }
        });
    });

    /**
     * 获取用户分页显示
     */
    app.get('/pages', function (req, res) {
        var p = req.query.p;
        var limit = 10;
        var count;
        var totalPages;
        conn_user.getTableCount(function (data) {
            if (data) {
                count = data.data[0].count;
                totalPages = Math.ceil(data.data[0].count / limit);
            }
            conn_user.getUserpage((p - 1) * limit, limit, function (data) {
                if (data.status) {
                    res.send({list: data, maxPage: totalPages, currage: p, count: count, limit: limit});
                } else {
                    res.send(500);
                }
            });
        });

    });
    /**
     * 获取图片列表
     * gan
     */
    app.get('/getimglist', function (req,res) {
        var p=req.query.p-1;
        var limit=10;
        shop_view.getimgs(p,limit,function (data) {
            res.send(data)
        })


    });

    /**
     * 获取商品列表
     */
    app.get('/shoplist', function (req, res) {
        var p = req.query.p;
        var limit = 6;
        var count;
        var totalPages;
        shop_view.getShopCount(function (data) {
            if (data) {
                count = data.data[0].count;
                totalPages = Math.ceil(data.data[0].count / limit);
            }
            shop_view.getshops((p - 1) * limit, limit, function (data) {
                if (data.status) {
                    res.send({list: data, maxPage: totalPages, currage: p, count: count, limit: limit});
                } else {
                    res.send(500);
                }
            });
        })
    });

    /**
     * 获取id商品 && 评论列表
     */
    app.get('/getshop', function (req, res) {
        var p = req.query.id;
        shop_view.getshop(p, function (data) {
            if (data.status) {
                comment_model.getComment(p,function (comment) {
                    if(comment.status){
                        res.send({data:{shop:data.data,comment:comment.data,status:data.status}});
                    }
                })
            } else {
                res.send(500);
            }
        });
    });

    /**
     * 查询库存数量
     */
    app.get('/stock', function (req, res) {
        shop_view.getStock(function (data) {
            if (data.status) {
                res.send(data);
            } else {
                res.send(500);
            }
        });
    });

    /**
     * 重定向
     */
    app.get('/', function (req, res) {
        res.redirect('index.html')
    });

    action_user(app);
    shop(app);
    comment(app);
};
