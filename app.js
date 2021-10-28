var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

var indexRouter = require('./routes');
var loginRouter = require('./routes/login');
var saibaMaisRouter = require('./routes/saibaMais');
var eventosRouter = require('./routes/eventos');
var ongsRouter = require('./routes/ongs');
var doacaoRouter = require('./routes/doacao');
var quemSomosRouter = require('./routes/quemSomos');
var contatoRouter = require('./routes/contato');
var petsRouter = require('./routes/pets');

//var passaport = require("passaport")
//require("./config/auth")(passaport)


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
  secret: "projetoExpressPethero",
  resave:true,
  saveUninitialized:true
}))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/saibaMais', saibaMaisRouter);
app.use('/eventos', eventosRouter);
app.use('/ongs', ongsRouter);
app.use('/doacao', doacaoRouter);
app.use('/quemSomos', quemSomosRouter);
app.use('/contato', contatoRouter);
app.use('/pets', petsRouter);


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
