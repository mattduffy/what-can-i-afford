var express = require('express')
  , app = express()
  , router = express.Router();


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
  var maintainer = {name: "Matt", twitter: "don't have one", blog: "don't have that, either"};
  var templateVars = {
    title: "so far I don't like Jade",
    maintainer: maintainer
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


router.all('/fail', function(req, res, next) {
  next();
})
.get('/fail', function(req, res, next) {
  fail();
  res.json({env: app.get('env')});
})
.put('/fail', function(req, res, next) {
  var err = {status: 'HTTP '+ req.method + ' method not implemented for this route.', stack: null};
  var mess = 'HTTP '+ req.method + ' method not implemented for this route.';
  res.status(405).render('error', {title: 'Mehtod not implemented', error: err, message: mess}); 
})
.delete('/fail', function(req, res, next) {
  var err = {status: 'HTTP '+ req.method + ' method not implemented for this route.', stack: null};
  var mess = 'HTTP '+ req.method + ' method not implemented for this route.';
  res.status(405).render('error', {title: 'Mehtod not implemented', error: err, message: mess}); 
});

module.exports = router;