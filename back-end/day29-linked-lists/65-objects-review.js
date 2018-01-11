// Object creation

var person1 = {
	name: 'Bob',
	occupation: 'builder',
	age: 33
}

// Get properties with dot notation
console.log(person1.name);

// Get properties with bracket notation
console.log(person1['occupation']);

// Constructor functions are used to create templates for objects
function Contact(firstName, lastName, number) = {
	this.firstName = firstName;
	this.lastName = lastName;
	this.number = number;
}

// Creating an object from a constructor function
var bruce = new Contact('Bruce', 'Banner', '234-2332');


// Creating methods in constructor functions
function Contact(firstName, lastName, number) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.number = number;
	this.resetName = function (fname, lname) {
		this.firstName = fname;
		this.lastName = lname;
	}
}

// Methods can also be created using prototype
Contact.prototype.resetNumber = function(newNum) {
	this.number = newNum;
}

// calling a method
bruce.resetName('Bruce', 'Wayne');
bruce.resetNumber('444-4444');

