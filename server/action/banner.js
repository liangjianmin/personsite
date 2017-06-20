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
    let bannerDir=new multiparty.Form({uploadDir:'../dist/static/banner/'});
    bannerDir.parse(req,function (err, fields, files) {
      if(err){
        console.log('parse error:'+err)
      }else {
        var inputFile = files.inputFile[0];
        var uploadedPath = inputFile.path;
        var dstPath = '../dist/static/banner/' + inputFile.originalFilename;
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
      let imgurl=req.body.url;//  图片的地址
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
  /**
  * 获取最新显示图片
  * */
  app.get('/bannerlist',function (req, res) {
        banner.getbannerOrder(function (data) {
            res.send(data)
        })
  });

  /**
   * 获取图片列表
   * */
  app.get('/bannerall',function (req, res) {
      let imgData={};
      banner.getbannerAll({pindex:req.query.pindex,pagesize:req.query.pagesize},function (data) {
        imgData=data;
        banner.getBannerCount(function (mes) {
          imgData.count=mes.data[0].count;
          res.send(imgData)
        });
      });
  })
  /**
  * 上线
  * */
  app.get('/updatabanner',function (req, res) {
    banner.getBanner(function (pid) {
      if(pid.data!=''){
        banner.updataBanner({id:pid.data[0].id},function (mes) {
          banner.updataBannerNow({id:req.query.id},function (data) {
            res.send(data)
          });
        });
      }else {
        banner.updataBannerNow({id:req.query.id},function (data) {
          res.send(data)
        });
      }
    });
  });
};















