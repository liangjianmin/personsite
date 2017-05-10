var user = require("../models/user.js");
var moment = require('moment'); //时间
var multiparty = require('multiparty'); //文件操作模块
var util = require('util');
var fs = require('fs');

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
                for (let i = 0; i < data.data.length; i++) {
                    if (req.body.username == data.data[i].username && req.body.password == data.data[i].password) {
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
            for (let i = 0; i < data.data.length; i++) {
                if (req.session.user == data.data[i].username) {
                    res.send({session: req.session.user, status: true, role: data.data[i].role});
                    break;
                }
            }
            res.end();
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
                type: req.body.type,
                imageUrl:req.body.imageUrl,
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
};
