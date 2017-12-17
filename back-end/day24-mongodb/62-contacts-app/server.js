var express = require('express');
var app = express();
var port = 3000;

app.use(express.static(__dirname + '/app/'));

app.listen(port, function() {
	console.log('server starting on port ' + port);
}); 