var express = require('express');
var path = require('path');
var favicon = require('serve-favicon'); //用于请求网页的logo
var logger = require('morgan');  //日志输出到终端
var session = require('express-session');  //session
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser'); //解析http请求
var mysql = require("mysql");
var jade = require('jade');
var routes = require('./routes/index');

var app = express();

//加载引擎模板
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));

//调用工具
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({
  secret: 'appuser',
  name: 'user',
  resave: false,
  saveUninitialized: true
}));

app.use(express.static(path.join(__dirname, '../dist')));

//设置跨域
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  if (req.method == "OPTIONS") res.sendStatus(200);/*让options请求快速返回*/
  else  next();
});

// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}


// no stacktraces leaked to users
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


routes(app);

app.listen(3000, function () {
  console.log('listen 3000')
});


module.exports = app;
