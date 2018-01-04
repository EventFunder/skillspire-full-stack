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
		//console.log(documents);
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

app.delete('/contacts/:id', function (request, response) {
	var id = request.params.id; // gets the value of the id from the url
	console.log(id);
	db.contactsdbforrepo.remove({_id: mongojs.ObjectId(id)}, function (error, document) {
		response.json(document);
	});
});

app.get('/contacts/:id', function (request, response) {
	var id = request.params.id;
	console.log(id);
	db.contactsdbforrepo.findOne({_id: mongojs.ObjectId(id)}, function (error, document) {
		response.json(document);
	});
});

app.put('/contacts/:id', function (request, response) {
	var id = request.params.id;
	console.log(request.body.firstName);
	db.contactsdbforrepo.findAndModify({query: {_id: mongojs.ObjectId(id)},
		update: {$set: {firstName: request.body.firstName, middleName: request.body.middleName, lastName: request.body.lastName, number: request.body.number, email: request.body.email}},
		new: true}, function (error, document) {
			response.json(document);
		});
});

app.listen(port, function() {
	console.log('server starting on port ' + port);
}); 