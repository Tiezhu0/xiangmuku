var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var connection = require('./routes/mysql.js');
var usersRouter = require('./routes/users');
var biao_yi = require('./routes/biao_yi');
var biao_er = require('./routes/biao_er');
var jia_biao_yi = require('./routes/jia_biao_yi');
var jia_biao_er = require('./routes/jia_biao_er');
var shan_chu_biao_yi = require('./routes/shan_chu_biao_yi');
var gai_biao_yi = require('./routes/gai_biao_yi');
var gai_biao_yi1 = require('./routes/gai_biao_yi1');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/biao_yi', biao_yi);
app.use('/biao_er', biao_er);
app.use('/jia_biao_yi', jia_biao_yi);
app.use('/jia_biao_er', jia_biao_er);
app.use('/shan_chu_biao_yi', shan_chu_biao_yi);
app.use('/gai_biao_yi', gai_biao_yi);
app.use('/gai_biao_yi1', gai_biao_yi1);

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
