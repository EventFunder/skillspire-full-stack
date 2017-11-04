// console.log() is a function used to log data to the console. This is mainly used for testing purposes.
function logToConsole() {
	console.log('hi');
}

// return is used in functions to pass a value back to where the call was made.
function rectangleArea(l, w) {
	return l * w;
}


alert('Rectancle1:' + rectangleArea(3, 2));
alert('Rectancle2:' + rectangleArea(4, 4));

document.write('Rectangle area: ' + rectangleArea(3, 3));


// Create a global variable called fname that prompts the user for a name.
// Create a function that takes a name as a parameter and returns the name.
// Invoke the function by alerting the name passed in the prompt.