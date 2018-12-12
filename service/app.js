var express = require('express');
var path = require('path');
var createError = require('http-errors');
// var cookieParser = require('cookie-parser'); // 解析浏览器cookie信息
var bodyParser = require('body-parser'); // request中间件，信息保存在req.body
var logger = require('morgan'); // 日志记录中间件

// express()用来创建一个Express的程序。express()方法是express模块导出的顶层方法。
var app = express();
var apiRouter = require('./routes/api');

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/test', function(req, res, next) {
	console.log('test');
	next('ttttttttt');
});
app.use(function(data, req, res, next) {
	console.log('next', data);
	res.send(`test info: ${data}`);
});

app.use('/api', apiRouter);

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
