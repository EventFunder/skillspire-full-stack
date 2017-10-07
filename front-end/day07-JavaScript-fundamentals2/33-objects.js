// Creating an object
var obj = {};

// Objects are a way to represent a piece of data that has properties
// Example: Netflix's movies/tv shows may be represented as objects

var supernatural = {
	title: 'Supernatural',
	avgRating: 4.5,
	genres: ['adventure', 'action']
};

var friends = {
	title: 'Friends',
	avgRating: 5,
	genres: ['comedy', 'romance', 'drama']
};

// An object's properties can be accessed using "dot notation"
console.log(supernatural.genres);
console.log(friends.title);


// Another way to access an object's properties is "bracket notation"
console.log(supernatural['genres']);
console.log(friends['title']);

// It's uncommon to see bracket notation used. Unless you have a good
// reason, you should be using dot notation.