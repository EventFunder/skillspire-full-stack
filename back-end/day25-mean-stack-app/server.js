var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactsdbforrepo', ['contactsdbforrepo']);
var bodyParser = require('body-parser');
var port = 3000;

app.use(express.static(__dirname + '/app/'));
app.use(bodyParser.json());

app.get('/contacts', function (request, response) {
	console.log('GET request received on server.');

	db.contactsdbforrepo.find(function (error, documents) {
		console.log(documents);
		response.json(documents);
	});
	
});

app.post('/contacts', function (request, response) {
	console.log(request.body);

	// insert() sends data into the db and the response gets sent back to controller
	db.contactsdbforrepo.insert(request.body, function (error, document) {
		response.json(document); 
	});
});

app.listen(port, function() {
	console.log('server starting on port ' + port);
}); 