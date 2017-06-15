/**
 * Created by gan on 2017/5/26.
 */
var banner=require("../models/banner.js");
var multiparty = require('multiparty'); //connect-multiparty:上传文件的中间件
var moment = require('moment'); //时间
var fs = require('fs'); //nodejs的fs（文件系统）
var path=require('path')
module.exports=function (app) {



  /**
   * 接收图片  返回图片地址
   * **/
  app.post('/bannerreceive',function (req, res) {
    let bannerDir=new multiparty.Form({uploadDir:'../imgservice/banner/'});

    bannerDir.parse(req,function (err, fields, files) {
      if(err){
        console.log('parse error:'+err)
      }else {
        var inputFile = files.inputFile[0];
        var uploadedPath = inputFile.path;
        var dstPath = '../imgservice/banner/' + inputFile.originalFilename;
        fs.rename(uploadedPath, dstPath, function (err) {
                if (err) {
                console.log('rename error: ' + err);
              }else {
                  banner.getbannerOrder(function (data) {
                    res.send({staus:true,imgurl:data.data});
                  })
              }
        })
      }

    });

  });
  /**
   * 接收提交数据
   * **/
  app.post('/bannerload',function (req, res) {
      let imgurl=req.body.data.url;//  图片的地址
      banner.insertbaner({
        data:{
          url:imgurl.join(','),
          from:req.session.user,
          time:moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
          desc:'banner table use'
        },
        sql:"INSERT INTO pics SET ?"
      },function (data) {
        res.send(data)
      })
  });

  /*
  * 获取图片列表
  * */
  app.get('/bannerlist',function (req, res) {
        banner.getbannerOrder(function (data) {
            res.send(data)
        })
  })

}

