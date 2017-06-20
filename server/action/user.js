var user = require("../models/user.js");
var moment = require('moment'); //时间
var multiparty = require('multiparty'); //文件操作模块
var util = require('util');
var fs = require('fs');
var client = require("../util/redis.js");//缓存操作模块
var crypto = require('crypto');//加密

module.exports = function (app) {
    /**
     * 用户更新
     */
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

    /**
     * 删除用户
     */
    app.post('/deleteUsers', function (req, res, next) {
        user.deleteUsers({
            sql: "DELETE FROM user WHERE id = " + req.body.id
        }, function (data) {
            res.send(data);
        });
    });

    /**
     * 登录session设置
     */
    app.post('/login', function (req, res, next) {
        var loginflag = true;
        user.getUsers(function (data) {
            if (data.status) {
                var md5 = crypto.createHash('md5');
                md5.update(req.body.password.toString());
                var ispwd = md5.digest('hex');
                for (let i = 0; i < data.data.length; i++) {
                    if (req.body.username == data.data[i].username && ispwd == data.data[i].password) {
                        /*发送session*/
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
     * 获取session
     */
    app.post('/session', function (req, res, next) {
        user.getUsers(function (data) {
            if (req.session.user != undefined) {
                for (let i = 0; i < data.data.length; i++) {
                    if (req.session.user == data.data[i].username) {
                        res.send({session: req.session.user, status: true, role: data.data[i].role});
                        break;
                    }
                }
            } else {
                res.send({status: false});
            }
        })
    });

    /**
     * 清除session退出系统
     */
    app.post('/exit', function (req, res, next) {
        req.session.user = '';
        res.send({session: req.session.user, status: false});
        res.end();
    });

    /**
     * 注册并且判断用户是否已经注册
     */
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
                /*加密密码*/
                var md5 = crypto.createHash('md5');
                md5.update(req.body.password.toString());
                var pwd = md5.digest('hex');
                user.addUsers({
                    data: {
                        username: req.body.username,
                        password: pwd,
                        info: req.body.info,
                        sex: req.body.sex,
                        role: req.body.role,
                        from: 0,
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
                type: req.body.type,
                imageUrl: req.body.imageUrl,
                desc: req.body.desc,
                time: moment(new Date()).format("YYYY-MM-DD HH:mm:ss")
            },
            sql: "INSERT INTO publish SET ?"
        }, function (data) {
            res.send(data);
        });
    });

    /**
     *  上传文件
     */
    app.post('/fileUpload', function (req, res, next) {
        //生成multiparty对象，并配置上传目标路径
        var form = new multiparty.Form({uploadDir: '../src/upload/files/'});
        //上传完成后处理
        form.parse(req, function (err, fields, files) {
            var filesTmp = JSON.stringify(files, null, 2);
            if (err) {
                console.log('parse error: ' + err);
            } else {
                var inputFile = files.inputFile[0];
                var uploadedPath = inputFile.path;
                var dstPath = '../src/upload/files/' + inputFile.originalFilename;
                //重命名为真实文件名
                fs.rename(uploadedPath, dstPath, function (err) {
                    if (err) {
                        console.log('rename error: ' + err);
                    } else {
                        console.log('upload ok');
                    }
                });
            }
            res.send(filesTmp)
        });
    });
    /**
     * 获取用户
     */
    app.get('/page', function (req, res) {
        user.getUsers(function (data) {
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
        user.getUsers(function (data) {
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
        user.getTableCount(function (data) {
            if (data) {
                count = data.data[0].count;
                totalPages = Math.ceil(data.data[0].count / limit);
            }
            user.getUserpage((p - 1) * limit, limit, function (data) {
                if (data.status) {
                    res.send({list: data, maxPage: totalPages, currage: p, count: count, limit: limit});
                } else {
                    res.send(500);
                }
            });
        });

    });

    /**
     * 客户端注册
     */
    app.post('/register', function (req, res, next) {
        var userfalg = true;
        user.getUsers(function (data) {
            if (data.status) {
                for (let i = 0; i < data.data.length; i++) {
                    if (req.body.phone == data.data[i].phone || req.body.username == data.data[i].username) {
                        res.send({data: req.body.username, phone: req.body.phone, isOwn: true});
                        userfalg = false;
                        break;
                    }
                }
            }
            if (userfalg) {
                /*加密密码*/
                var md5 = crypto.createHash('md5');
                md5.update(req.body.password.toString());
                var pwd = md5.digest('hex');
                user.addUsers({
                    data: {
                        username: req.body.username,
                        password: pwd,
                        phone: req.body.phone,
                        info: 'client',
                        sex: 0,
                        role: 2,
                        from: 1,
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
     * 客户端登录 用户名或者手机登录
     */
    app.post('/logins', function (req, res, next) {
        var loginflag = true;
        user.getUserCli(function (data) {
            if (data.status) {
                var md5 = crypto.createHash('md5');
                md5.update(req.body.password.toString());
                var ispwd = md5.digest('hex');
                for (let i = 0; i < data.data.length; i++) {
                    if ((req.body.username == data.data[i].username || req.body.username == data.data[i].phone) && ispwd == data.data[i].password) {
                        //缓存用户信息
                        client.hmset('user', {name: data.data[i].username, id: data.data[i].id}, function (err) {
                            if (err) {
                                return;
                            }
                        })
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
     * 客户端获取登录信息
     */
    app.post('/sessions', function (req, res) {
        client.hgetall('user', function (err, object) {
            if (err) {
                console.log(err);
            } else {
                res.send({session: object})
            }
        })
    });


};
