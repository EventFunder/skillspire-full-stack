// console.log() is a method used to log data to the console. This is mainly used for testing purposes.
function logToConsole() {
	console.log('hi');
}

// return is used in functions to pass a value back to where the call was made.
function rectangleArea(l, w) {
	return l * w;
}

// Think of "return" as asking the function to hold onto a value. It gives us the flexibility to do
// whatever we want with it. For examplle..

// we can alert it:
alert('Rectancle1:' + rectangleArea(3, 2));

// we can also add the data to our website:
document.write('Rectangle area: ' + rectangleArea(3, 3));



// "return" can be used to hold any data. Here we'll use it to hold a string.
function returnName() {
	return 'Farhad';
}

// now we'll alert it
alert(returnName());

// Create a global variable called fname that prompts the user for a name.
// Create a function that takes a name as a parameter and returns the name.
// Invoke the function by alerting the name passed in the prompt.


/*
IN CLASS ASSIGNMENT:

Step 1: Create a global variable that prompts the user for their name.

Step 2: Create a function that takes a name as a parameter and returns 
		'Hello, ' + [variable name]

Step 3: Invoke the function within an alert and pass that name as an 
		argument.
*/


// Answer:
var fname = prompt('What\'s your name?');
someFunc(fname); // <-- put this in an alert

function greet(name) {
	return 'Hello, ' + name;
}

alert(greet(fname));
