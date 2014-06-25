var express = require('express');
var router = express.Router();

var flights = [
    {number: '001', origin: "Oakland", desintation: "Denver"},
    {number: '002', origin: "San Francisco", desintation: "Denver"},
    {number: '003', origin: "Chicago", desintation: "Denver"},
    {number: '004', origin: "Los Angeles", desintation: "Denver"},
    {number: '005', origin: "New York", desintation: "Denver"},
    {number: '006', origin: "Denver", desintation: "Oakland"},
    {number: '007', origin: "Denver", desintation: "Chicago"},
];


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/list', function(req, res) {
  res.render('list', {title: "All Flights", flights: flights});
});

router.get('/list/json', function(req, res) {
  res.send(flights);
});

module.exports = router;
