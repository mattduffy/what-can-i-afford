var http = require('http'),
    flights = require('./data/flights'),
    app = require('./app')(flights);

app.set('port', process.env.PORT || 3000);

http.createServer(app).listen(app.get('port'), function() {
    console.log('express server listening on port: ', app.get('port'));
});