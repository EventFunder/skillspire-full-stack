'use strict';

// Whiteboard the following problems:

// Create a for loop that logs numbers 1-10.

// Create a function that logs 'Hi'.

// Create a function that logs numbers 1-10.

// Create a function that takes an array and logs each value in that array.


// I have an array of numbers. Log the sum of those numbers.




/*** SOLUTIONS ***/

// Create a for loop that logs numbers 1-10.
for (var i=0; i<=10; i++) {
	console.log(i);
}


// Create a function that logs 'Hi'. Invoke the function.
function greet() {
	console.log('Hi');
}

greet(); // Invoking the function



// Create a function that logs numbers 1-10. Invoke the function.
function logToTen() {
	// We're just taking the for loop from the first problem and placing it inside a function.
	for (var i=0; i<=10; i++) {
		console.log(i);
	}
}

logToTen(); // Invoking the function



// Create a function that takes an array as a parameter and logs each value in that array.

// Let's create 3 different arrays. The function should work for all of them.
var nums = [1, 5, 2, 9, 20, 7];
var teachers = ['Farhad', 'Thomas',' Alyssa'];
var misedArray = ['this', 'is', 'a', 'mixed', 'array', 5, false];

// The (arr) parameter serves as a placeholder for any data we pass. We're naming this "arr" short for
// array since we will always be passing an array to this function.
function logArrayValues(arr) {

	// in the condition we specify arr.length so that this works for arrays of any length.
	for (var i=0; i<=arr.length; i++) {
		// i is incremented with each iteration of this loop. So this will log the corresponding value
		// in the array.
		console.log(arr[i]);
	}

}