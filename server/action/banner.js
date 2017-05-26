/**
 * Created by gan on 2017/5/26.
 */
var banner=require("../models/banner.js");
var multiparty = require('multiparty'); //connect-multiparty:上传文件的中间件
var moment = require('moment'); //时间
var fs = require('fs'); //nodejs的fs（文件系统）
module.exports=function (app) {
  /*
  * 增加图片
  * req.body是前台发送来的数据
  * res.send是发送给前台数据
  * */
  app.post('/bannerload',function (req, res) {
    //具体看shop.js
    let form=new multiparty.Form({uploadDir:'../dist/static/banner/'});
    form.parse(req,function (err, fields, files) {
     // 分别返回body，文件属性，以及文件存放地址
   //   let filesTmp=JSON.stringify(files,null,2);
      if(err){
        console.log('parse error:'+err)
      }else {

        let inputFile=files.inputFile[0];
        let uploadedPath=inputFile.path;
        let dstPath='../dist/static/banner/'+inputFile.originalFilename
        fs.rename(uploadedPath,dstPath,function (err) {
          if(err){
            console.log('rename error'+err)
          }else {
             //判断是否登录
            if(req.session.user){
              /*
              * req.session
              Session {
                cookie:
                { path: '/',
                  _expires: null,
                  originalMaxAge: null,
                  httpOnly: true },
                user: 'admin' }
                *
                */
              banner.addPic({
                data:{
                  url:inputFile.originalFilename,
                  from:req.session.user,
                  desc:"banner table use",
                  time:moment(new Date()).format("YYYY-MM-DD HH:mm:ss")
                },
                sql:"INSERT INTO pics SET ?"
              },function (data) {
                res.send(data)
              })
            }else {
              res.send({staus:false,msg:'请登录'})
            }
          }
        })
      }
    })
  })
  app.get('/bannerlist',function (req, res) {
    console.log(req.body)
        var p=req.query.p;
        banner.getbanner(p,function (data) {
            res.send(data)
        })
  })
}

