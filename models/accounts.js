// Accounts data model
var util = require('util')
  , mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , dbparams = require('../libs/dbparams.js');

exports.connect = function(theDBUrl, theDBOptions, callback) {
  dburl = (undefined != theDBUrl) ? theDBUrl : dbparams.params.host;
  dboptions = (undefined != theDBOptions) ? theDBOptions : dbparams.params.options;
  mongoose.connect(dburl, dboptions);
};

exports.disconnect = function(callback) {
  mongoose.disconnect(callback());
};

var AccountSchema = new Schema({
  id: Schema.Types.ObjectId,
  name: String,
  type: String,
  heldAt: String,
  balance: {type: Number, min: 0},
  memo: String,
  liquid: Boolean,
  closed: Boolean
});
mongoose.model('accounts', AccountSchema);
var Account = mongoose.model('accounts');

exports.create = function(acct, callback) {
  var newAccount = new Account();
  newAccount.id = new ObjectId();
  newAccount.name = acct.name;
  newAccount.type = acct.type || 'savings';
  newAccount.heldAt = acct.heldAt;
  newAccount.balance = acct.balance || 0;
  newAccount.liquid = acct.liquid || true;
  newAccount.closed = acct.closed || false;
  newAccount.memo = acct.memo || '';
  newAccount.save(function(err) {
    if (err) callback(err);
    else callback(undefined);
  });
};

exports.update = function(id, acct, callback) {
  
};

exports.read = function(id, callback) {
  
};