var express = require('express')
  , app = express()
  , router = express.Router()
  , Account = require('../models/accounts.js');


router.all('/', function(req, res, next) {
  res.set('x-powered-by', 'Your mom!');
  next();
})
.get('/', function(req, res, next) {
  console.dir(req.route);
  var templateVars = {
    layout: 'layout.jade',
    title: "Jade sucks ass",
  };
  res.render('accounts', templateVars);
})
.post('/', function(req, res, next) {
  res.send(req.body.test);
})
.put('/', function(req, res, next) {
  var err = {status: 'HTTP '+ req.httpVersion + ' ' + req.method + ' method not implemented for this route.', stack: null};
  var mess = 'HTTP '+ req.httpVersion + ' ' + req.method + ' method not implemented for this route.';
  res.status(405).render('error', {title: 'Mehtod not implemented', error: err, message: mess}); 
})
.delete('/', function(req, res, next) {
  var err = {status: 'HTTP '+ req.method + ' method not implemented for this route.', stack: null};
  var mess = 'HTTP '+ req.method + ' method not implemented for this route.';
  res.status(405).render('error', {title: 'Mehtod not implemented', error: err, message: mess}); 
});

  
router.all('/accounts', function(req, res, next) {
  res.set('x-powered-by', 'Your mom!');
  next();
})
.get('/accounts', function(req, res, next) {
  var templateVars = {
    page: 'accounts',
    title: "View the accounts",
  };
  res.render('accounts', templateVars);
})
.post('/accounts', function(req, res, next) {
  var err = {status: 'HTTP '+ req.httpVersion + ' ' + req.method + ' method not implemented for this route.', stack: null};
  var mess = 'HTTP '+ req.httpVersion + ' ' + req.method + ' method not implemented for this route.';
  res.status(405).render('error', {title: 'Mehtod not implemented', error: err, message: mess}); 
})
.put('/accounts', function(req, res, next) {
  var err = {status: 'HTTP '+ req.httpVersion + ' ' + req.method + ' method not implemented for this route.', stack: null};
  var mess = 'HTTP '+ req.httpVersion + ' ' + req.method + ' method not implemented for this route.';
  res.status(405).render('error', {title: 'Mehtod not implemented', error: err, message: mess}); 
})
.delete('/accounts', function(req, res, next) {
  var err = {status: 'HTTP '+ req.method + ' method not implemented for this route.', stack: 'empty stack'};
  var mess = 'HTTP '+ req.method + ' method not implemented for this route.';
  res.status(405).render('error', {title: 'Mehtod not implemented', error: err, message: mess}); 
});

// Create a new financial account
router.all('/createAccount', function(req, res, next) {
  res.set('x-powered-by', 'Your mom!');
  next();
})
.get('/createAccount', function(req, res, next) {
  var templateVars = {
    page: 'createAccount',
    title: "Create a new finacial account",
  };
  res.render('createAccount', templateVars);
})
.post('/createAccount', function(req, res, next) {
  // this route handler reserved for edits to existing account data
  res.json(req.body);
})
.put('/createAccount', function(req, res, next) {
  // this route handler reservered for new account creation
  //var err = {status: 'HTTP '+ req.httpVersion + ' ' + req.method + ' method not implemented for this route.', stack: null};
  //var mess = 'HTTP '+ req.httpVersion + ' ' + req.method + ' method not implemented for this route.';
  //res.status(405).render('error', {title: 'Mehtod not implemented', error: err, message: mess});
  
  
  res.json(req.body);
  //res.redirect('/accountList');
})
.delete('/createAccount', function(req, res, next) {
  // this route hander reserved for deleting an existing account
  var err = {status: 'HTTP '+ req.method + ' method not implemented for this route.', stack: 'empty stack'};
  var mess = 'HTTP '+ req.method + ' method not implemented for this route.';
  res.status(405).render('error', {title: 'Mehtod not implemented', error: err, message: mess}); 
});


router.all('/fail', function(req, res, next) {
  var err = new Error();
  err.message = 'set in the all handler';
  err.status = 400;
  err.stack = 'no error stack, cause I don\'t know how to make one.';
  next();
})
.get('/fail', function(err, req, res, next) {
  err = err;
  err.message = 'over ridden in the /fail get handler.';
  next(err);
  res.json({env: app.get('env'), error: err});
})
.post('/fail', function(err, req, res, next) {
  util.debug(this);
  var err = new Error('err obj completely over written in fail post');
  var status = 405;
  err.status = status;
  err.stack = 'err up in herr.';
  err.method = {method: req.method, override: req.body._method};
  console.log('/fail, POST, ', err);
  next(err);
  res.status(404).render('error', {title: 'put fail', message: 'fail, no can put.', error: err});
})
.put('/fail', function(err, req, res, next) {
  var err = {status: 'HTTP '+ req.method + ' method not implemented for this route.', stack: null};
  var mess = 'HTTP '+ req.method + ' method not implemented for this route.';
  console.log('/fail, PUT, ', err);
  next(err);
  res.status(405).render('error', {title: 'Mehtod not implemented', error: err, message: mess}); 
})
.delete('/fail', function(err, req, res, next) {
  var err = {status: 'HTTP '+ req.method + ' method not implemented for this route.', stack: null};
  var mess = 'HTTP '+ req.method + ' method not implemented for this route.';
  console.log('/fail, DELETE, ', err);
  res.status(405).render('error', {title: 'Mehtod not implemented', error: err, message: mess}); 
});

module.exports = router;