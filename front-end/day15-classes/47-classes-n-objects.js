var tyrion = {
	name: 'Tyrion Lanister',
	number: '333-3312',
	email: 'idrinkandiknowthings@got.com'
}

var jon = {
	name: 'Jon Snow',
	number: '444-4444',
	email: 'iknownothing@got.com'
}

var cirsi = {
	name: 'Cirsi Lanister',
	number: '666-6666',
	email: 'heretolovemychildrenandblowshitup@got.com'
}



// Classes are used to quickly create multiple objects with similar properties.

function Contact(name, number, email) {
	this.name = name;
	this.number = number;
	this.email = email;
}

// class Contact {
// 	constructor(name, number, email) {
// 		this.name = name;
// 		this.number = number;
// 		this.email = email;
// 	}
// }

var tyrionLanister = new Contact('Tyrion Lanister', '333-3312', 'idrinkandiknowthings@got.com');
var jonsnow = new Contact('Jon Snow', '444-4444', 'iknownothing@got.com');
var cirsi = new Contact('Cirsi Lanister', '666-6666', 'heretolovemychildrenandblowshitup@got.com');


class Contact2 {
	constructor(name, number, email) {
		this.name = name;
		this.number = number;
		this.email = email;
	}
}

var jamey = new Contact2('Jamey Lanister', '234-2342', 'ineedahand@got.com');