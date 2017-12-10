var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.get('/', function(request, response) {
	response.send('Hello, universe!');
});

app.listen(port, function() {
	console.log('server available at port ' + port);
});