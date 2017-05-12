var action_user = require("../action/user.js");
var shop = require("../action/shop.js");

var conn_user = require("../models/user.js");
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
            var userdata={};
            if (data.status) {
                userdata=data.data.filter(function (value) {
                    return value['id']==id;
                })
                res.send({data:userdata});
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
                count=data.data[0].count;
                totalPages = Math.ceil(data.data[0].count/limit);
            }
            conn_user.getUserpage((p-1)*limit, limit, function (data) {
                if (data.status) {
                    res.send({list:data,maxPage:totalPages,currage:p,count:count,limit:limit});
                } else {
                    res.send(500);
                }
            });

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
};
