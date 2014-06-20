var os = require('os'),
    should = require('should'),
    assert = require('assert'),
    data = require('../data/mockdata').data;


console.log("++++++++++ testing the app ++++++++++\n");
console.log("\t testing successful data connection.");

console.log("\t>>>>> Does the exported data exist?");
var is_data_there = should.exist(data, "data seems to not be exported from data file");
console.log(is_data_there);
if (is_data_there != null && typeof is_data_there == 'object') {
    console.log(is_data_there);
}



//console.log(data.accounts);
is_mock = should(data.status).equal('muck', data.status);
//console.log(is_mock, " mock data is mock");
console.log("\n\t++++++++++ mock liquid balances sum: %d\n", data.getLiquidBalanceTtl(data.accounts));

