// Create a function that returns data which we will write to our HTML document.

var fname = prompt('What is your first name?');

function greet(someName) {
	return 'Hello, ' + someName;
}

document.write(greet(fname));
document.write('<br>');
document.write(greet('Ahmed'));