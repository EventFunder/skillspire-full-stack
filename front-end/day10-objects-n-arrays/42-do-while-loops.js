'use strict';

// Work similar to a while loop. Has one difference.
// It starts with the task, and THEN checks the condition.

// syntax
do {
	//some task
} while (condition);


// Below we will use a do-while loop to log numbers 0 to 5 just so you can see the
// difference between a while loop and a do-while loop.
var num = 0;

do {
	console.log(num);
	num++
} while (num <= 5);


// Example of a use case for do-while loops. We'll prompt the user to choose a username.
// As long as the user doesn't type anything, we will continue to prompt him.

do {
	var username = prompt('Choose a username');
} while (username === '');





var answer = 7;
do {
	var userGuess = prompt('Guess the number I chose.');
} while (userGuess != answer);