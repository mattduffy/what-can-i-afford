'use strict';
var envHost = process.env['MONGO_NODE_DRIVER_HOST'] || 'localhost'
  , envPort = process.env['MONGO_NODE_DRIVER_PORT'] || '27017'
  , dbUser = 'matt'
  , dbPass = 'mongopassword'
  , userString
  , dbOptions = {}
  , dbName = ''
  , uri;

userString = (dbUser && dbPass) ? dbUser + ':' + dbPass + '@' : '';

dbOptions.replSet = {rs_name: 'replset'};
dbOptions.mongos = false;

uri = 'mongodb://' + userString + envHost + ':' + envPort + '/' + dbName;

module.exports = {
  dbname: dbName,
  username: dbUser,
  password: dbPass,
  params: {
    host: uri,
    options: dbOptions,
    dialect: 'mongodb'
  }
};