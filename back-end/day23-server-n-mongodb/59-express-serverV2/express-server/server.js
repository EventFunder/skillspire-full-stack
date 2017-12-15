var express = require('express');
var app = express();
var port = 3000;

// app.get('/', function(request, response) {
// 	response.send('Hello, universe!');
// });

app.use(express.static(__dirname + '/app/'));

app.use(function(request, response, next) {
	response.status(404).sendFile(__dirname + '/app/404.html');
});

app.listen(port, function() {
	console.log('server starting on port ' + port);
}); 