var shop = require("../models/shop.js");
var moment = require('moment'); //时间
var multiparty = require('multiparty'); //文件操作模块
var util = require('util');
var fs = require('fs');

module.exports = function (app) {
    /**
     * 商品添加
     */
    app.post('/shopsave', function (req, res, next) {
        shop.addShop({
            data: {
                shopname: req.body.shopname,
                price: req.body.price,
                desc: req.body.desc,
                evaluate: req.body.evaluate,
                stocknum: req.body.stocknum,
                imgid: req.body.imgid,
                time: moment(new Date()).format("YYYY-MM-DD HH:mm:ss")
            },
            sql: "INSERT INTO shop SET ?"
        }, function (data) {
            res.send(data);
        });
    });
    /**
     *  上传文件
     */
    app.post('/shopupload', function (req, res, next) {
        //生成multiparty对象，并配置上传目标路径
        var form = new multiparty.Form({uploadDir: '../src/upload/shop/'});
        //上传完成后处理
        form.parse(req, function (err, fields, files) {
            var filesTmp = JSON.stringify(files, null, 2);
            if (err) {
                console.log('parse error: ' + err);
            } else {
                var inputFile = files.inputFile[0];
                var uploadedPath = inputFile.path;
                var dstPath = '../src/upload/shop/' + inputFile.originalFilename;
                //重命名为真实文件名
                fs.rename(uploadedPath, dstPath, function (err) {
                    if (err) {
                        console.log('rename error: ' + err);
                    } else {
                        /**
                         * 记录用户name
                         * callback id关联其他表
                         */
                        if(req.session.user){
                            shop.addPic({
                                data: {
                                    url: inputFile.originalFilename,
                                    fromname: req.session.user,
                                    desc:"shop table use",
                                    time: moment(new Date()).format("YYYY-MM-DD HH:mm:ss")
                                },
                                sql: "INSERT INTO pics SET ?"
                            }, function (data) {
                                res.send(data);
                            })
                        }else{
                            res.send({staus:false,msg:'请登录'});
                        }
                    }
                });
            }
        });
    });
};
