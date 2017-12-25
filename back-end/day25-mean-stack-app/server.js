var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactsdbforrepo', ['contactsdbforrepo']);
var port = 3000;

app.use(express.static(__dirname + '/app/'));

app.get('/contacts', function (request, response) {
	console.log('GET request received on server.');

	db.contactsdbforrepo.find(function (error, documents) {
		console.log(documents);
		response.json(documents);
	});
	
});

app.listen(port, function() {
	console.log('server starting on port ' + port);
}); 