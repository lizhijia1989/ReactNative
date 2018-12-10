var createError = require('http-errors');
var express = require('express');
var path = require('path');
// var cookieParser = require('cookie-parser'); // 解析浏览器cookie信息
var bodyParser = require('body-parser');
var logger = require('morgan'); // 日志记录中间件

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// express()用来创建一个Express的程序。express()方法是express模块导出的顶层方法。
var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));


// app.use('/', indexRouter);

// app.use('/', function(req, res, next) {
//   console.log('index req.body', req.body);
//   // res.send({
//   //   status: 1,
//   //   info: "读取文件成功",
//   //   data: {a:1,b:2}
//   // });
//   res.json({
//     status: 200,
//     info: "读取文件成功",
//     data: {a:1,b:2}
//   });
// });

app.use('/GetList', function(req, res, next) {
  console.log('GetList req.body', req.body);
  var _list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var list = [];
  var number = req.body.number;
  if (!number) {
  	res.json({
	    status: 500,
	    info: '缺少number',
	    list
	  });
	  return;
  }
  list = _list.filter((item, i) => i < Number(number));
  res.json({
    status: 200,
    info: '成功',
    list
  });
});

app.use('/PostInfo', function(req, res, next) {
  console.log('PostInfo req.body', req.body);
  res.json({
    status: 200,
    info: '成功',
    message: `你选择了${req.body.info}号`
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
