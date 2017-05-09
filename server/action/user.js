var user = require("../models/user.js");
var moment = require('moment');


module.exports = function (app) {
    app.post('/updateUsers', function (req, res, next) {
        user.updateUsers({
            sql: "update user SET username=?,password=?,sex=?,role=?,time=? WHERE id = ?",
            params: [
                req.body.username,
                req.body.password,
                req.body.sex,
                req.body.role,
                moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
                req.body.id,
            ]
        }, function (data) {
            res.send(data);
        });
    });

    app.post('/deleteUsers', function (req, res, next) {
        user.deleteUsers({
            sql: "DELETE FROM user WHERE id = " + req.body.id
        }, function (data) {
            res.send(data);
        });
    });

    app.post('/login', function (req, res, next) {
        var loginflag = true;
        user.getUsers(function (data) {
            if (data.status) {
                for (let i = 0; i < data.data.length; i++) {
                    if (req.body.username == data.data[i].username && req.body.password == data.data[i].password) {
                        /*发送session用户*/
                        req.session.user = req.body.username;
                        res.send({status: true});
                        loginflag = false;
                        break;
                    }
                }
                if (loginflag) {
                    res.send({status: false});
                }
            }
            res.end();
        })
    });

    /**
     * 登录session设置
     */
    app.post('/session', function (req, res, next) {
        user.getUsers(function (data) {
            for (let i = 0; i < data.data.length; i++) {
                if (req.session.user == data.data[i].username) {
                    res.send({session: req.session.user, status: true, role: data.data[i].role});
                    break;
                }
            }
            res.end();
        })
    });

    app.post('/exit', function (req, res, next) {
        req.session.user = '';
        res.send({session: req.session.user, status: false});
        res.end();
    });

    app.post('/addUsers', function (req, res, next) {
        var userfalg = true;
        user.getUsers(function (data) {
            if (data.status) {
                for (let i = 0; i < data.data.length; i++) {
                    if (req.body.username == data.data[i].username) {
                        res.send({data: req.body.username, isOwn: true});
                        userfalg = false;
                        break;
                    }
                }
            }
            if (userfalg) {
                user.addUsers({
                    data: {
                        username: req.body.username,
                        password: req.body.password,
                        info: req.body.info,
                        sex: req.body.sex,
                        role: req.body.role,
                        time: moment(new Date()).format("YYYY-MM-DD HH:mm:ss")
                    },
                    sql: "INSERT INTO user SET ?"
                }, function (data) {
                    res.send(data);
                });
            }
        })
    });

    /**
     * 发布活动
     */
    app.post('/publish', function (req, res, next) {
        user.publish({
            data: {
                name: req.body.name,
                region: req.body.region,
                starttime: moment(req.body.starttime).format("YYYY-MM-DD"),
                endtime: moment(req.body.endtime).format("HH:mm:ss"),
                delivery: req.body.delivery,
                type: req.body.type.join(','),
                desc: req.body.desc,
                time: moment(new Date()).format("YYYY-MM-DD HH:mm:ss")
            },
            sql: "INSERT INTO publish SET ?"
        }, function (data) {
            res.send(data);
        });
    });

    /**
     * 上传图片
     */
    app.post('/fileUpload', function (req, res) {
        var _files = req.files;
        console.log(_files)
    });
};
