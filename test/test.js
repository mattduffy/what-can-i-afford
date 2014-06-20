var os = require('os'),
    should = require('should'),
    assert = require('assert'),
    data = require('../data/mockdata').data;


console.log("++++++++++ testing the app ++++++++++");
console.log("does the exported data exist?");
poo = should.exist(data, "data exported from data file");

console.log("++++++++++ testing the poo ++++++++++");
console.log(poo);
console.log("++++++++++ testing the poo ++++++++++");

//console.log(data.accounts);
is_mock = should(data.status).equal('muck', data.status);
console.log(is_mock, " mock data is mock");
console.log(data.getLiquidBalanceTtl(data.accounts));