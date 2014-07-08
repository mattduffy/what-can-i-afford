var util = require('util');
var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var responseTime = require('response-time');
var errorHandler = require('errorhandler');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

app.set('x-powered-by', false);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('view options', {layout: true});
//app.locals.pretty = true;

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser({keepExtensions: true, uploadDir: './uploads'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'models')));

if (app.get('env') === 'development') {
  app.use(responseTime());
  app.use(errorHandler());
  console.log(util.inspect(app._router, {depth: null, colors: true}));
}

app.use('/', routes);
app.use('/users', users);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


/// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;