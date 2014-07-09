var name = 'Matthew Duffy'
	, title = 'My Test Module'
	, x = 0
	, data = {}
  , util = require('util');

exports.hello = function() {
  var msg1 = 'My name is ' + name;
  var msg2 = 'Welcome to: ' + title;
  util.log(msg1);
  util.log(msg2);
};

exports._tick = function(label) {
  console.time(label);
  for(var i=0; i<1500; i++) {
    ;
  }
  console.timeEnd(label);
};
