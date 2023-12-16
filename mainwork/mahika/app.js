var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var globalRouter =require("./routes/global")
var s_register=require("./routes/s_register")
var s_login=require("./routes/s_login")
var t_login=require("./routes/t_login")
var t_register=require("./routes/t_register")
var t_dashboard=require("./routes/t_dashboard")
var s_dashboard=require("./routes/s_dashboard")

var app = express();


// db connection-1
var mongoose=require("mongoose");
const url="mongodb://0.0.0.0/27017"
mongoose.connect(url,{useNewUrlParser:true})
const con=mongoose.connection
con.on('open',function(){
  console.log("Running on port 8080");
  console.log("connected to database");
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname,'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/global",globalRouter)
app.use("/s_login",s_login)
app.use("/s_register",s_register)

app.use("/t_login",t_login)
app.use("/t_register",t_register)
app.use("/t_dashboard",t_dashboard)
app.use("/s_dashboard",s_dashboard)

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
app.listen(8080);
module.exports = app;
