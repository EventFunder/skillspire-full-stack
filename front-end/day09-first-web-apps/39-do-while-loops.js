// Here is the syntax for a do-while loop.

do {

	//perform task

} while ();

// In a do-while loop, the task will be performed at least once. If the while condition is
// true, the task will be performed until the condition is no longer true.


// Below we will use a do-while loop to log numbers 0 to 5 just so you can see the
// difference between a while loop and a do-while loop.
var num = 0;

do {
	console.log(num);
	num++
} while (num <=5);


// Example of a use case for do-while loops. We'll prompt the user to choose a username.
// As long as the user doesn't type anything, we will continue to prompt him.

do {
	var username = prompt('Choose a username');
} while (username === '');


