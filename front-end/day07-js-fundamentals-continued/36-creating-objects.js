// There are two ways to create objects

// "Object literal notation" which was covered in the last lesson,  uses curly braces

var adam = {
	height: '6 feet',
	age: 27,
	city: 'Bellevue'
};


// Another way to create objects is to use a "constructor"

var adam = new Object(); // same as:    var adam = {};
adam.height = '6 feet';
adam.age = 27;
adam.city = 'Bellevue';


// Example of when a constructor is used:
// Used when adding methods to objects (covered in next lesson).

/* 
Example:
When managing Top Pot Donut Stores, I need to find the average
number of customers for each day. I could need to attach a function
to each object to find the average. Because I'm adding functionality, 
I'd use object constructors instead of object literal notation.
*/
var redmondStore = new Object();
var seattleStore = new Object();
var bellevueStore = new Object();
