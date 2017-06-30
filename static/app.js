var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan'); //日志输出到终端
var bodyParser = require('body-parser');  //用来解析http请求体


var app = express();



//调用工具
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use(express.static(path.join(__dirname, '../dist')));



app.get('/', function (req, res) {
    res.redirect('index.html')
});



app.listen(3838, function () {
  console.log('listen 3838')
});

