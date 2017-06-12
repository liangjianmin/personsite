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

    var longurl=[],turl=[];
    console.log('触发')
    form.parse(req,function (err, fields, files) {
     // 分别返回body，文件属性，以及文件存放地址
   //   let filesTmp=JSON.stringify(files,null,2);
      if(err){
        console.log('parse error:'+err)
      }else {
        let inputFile=files.inputFile[0];
        let uploadedPath=inputFile.path;
        let dstPath='../dist/static/banner/'+inputFile.originalFilename;
        fs.rename(uploadedPath,dstPath,function (err) {
          if(err){
            console.log('rename error'+err)
          }else {
             //判断是否登录
            if(req.session.user){
              banner.getbannername(function (data) {
               longurl=data.data[0].url.toString().split(',');
               turl=longurl.slice(0);
                longurl.forEach(function (e,index) {
                  if(e==inputFile.originalFilename){
                    turl.splice(index,1);
                  }
                });
                turl.push(inputFile.originalFilename);
                banner.addPic({
                  sql:"UPDATE pics SET url=?,`from`=?,`time`=? WHERE id=322",
                  params: [
                    turl.join(','),
                    req.session.user,
                    moment(new Date()).format("YYYY-MM-DD HH:mm:ss")
                  ]
                },function (data) {
                  res.send(data)
                })

              })

            }else {
              res.send({staus:false,msg:'请登录'})
            }
          }
        })
      }
    })
  })
  /*
  * 获取图片列表
  * */
  app.get('/bannerlist',function (req, res) {
      //  var p=req.query.p;
        banner.getbannername(function (data) {
            res.send(data)
        })
  })
  /*
  * 删除图片
  * */
  app.post('/bannerremove',function (req, res) {
    banner.removebanner({
      sql:'DELETE FROM pics WHERE id = '+req.body.id+''
    },function (data) {
      res.send(data)
    })
  })
  /*
  * 更新
  * */
  app.post('/bannerupdate',function (req, res) {
    fs.unlinkSync('../dist/static/banner/'+req.body.del);
    banner.addPic({
      sql:"UPDATE pics SET url=?,`from`=?,`time`=? WHERE id=322",
      params: [
        req.body.imgid,
        req.session.user,
        moment(new Date()).format("YYYY-MM-DD HH:mm:ss")
      ]
    },function (data) {
      res.send(data)
    })

  })
}

