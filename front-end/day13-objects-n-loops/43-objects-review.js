'use strict';

/*
	What is an object in the real world?  A chair, a table, a book. These are objects. In programming, 
	an object is a collection of properties that are tied to a variable. This is similar to how we
	define an object in the real world. What is a table? It's a thing with a flat surface, has one or 
	more legs, and is stable enough that we can place things on it (these are all properties that define 
	a table). Objects also have functionality that's tied to them.
*/

// An object is a data type just like a string, number, boolean, and function.

// The marshawn object has 3 properties
var marshawn = {
	name: 'Marshawn Lynch',
	heightInInches: 71,
	occupation: 'American football running back',
	location: 'Seattle',
	speak: function() {
		console.log('On the field, there\'s no reason why I can\'t run through you.');
	},
	changeLocation: function(newLocation) {
		this.location = newLocation;
	}
}


var bruce = {
	name: 'Bruce Wayne',
	heightInInches: 74,
	occupation: 'CEO of Wayne Enterprise',
	location: 'Wayne Manor, Gotham City',
	speak: function() {
		console.log('Because I\'m Batman!');
	}
}

var clark = {
	name: 'Clark Kent',
	heightInInches: 73,
	occupation: 'Reporter',
	location: 'Metropolis',
	speak: function() {
		console.log('The \'Amazing\' can only be created by facing fear, risk, and failure during the process.')
	}
}




// dot notation and bracket notation are used to access properties of objects.
console.log(marshawn.name); // dot notation
console.log(marshawn['occupation']); // bracket notation


// To access an object's method, dot notation must be used. For this reason, developers rarely use bracket notation
// since dot notation allows them to keep their code consistent.
marshawn.newLocation('San Francisco');
bruce.speak();


// We've already worked with other objects with methods attached to them.
console.log()
document.write()