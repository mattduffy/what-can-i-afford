// Accounts data model
var util = require('util')
  , mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , dburl = undefined;

exports.connect = function(theDBUrl, callback) {
  dburl = theDBUrl;
  mongoose.connect(dburl);
};

exports.disconnect = function(callback) {
  mongoose.disconnect(callback());
};

var AccountSchema = new Schema({
  id: ObjectId,
  name: String,
  type: String,
  heldAt: String,
  balance: Float,
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