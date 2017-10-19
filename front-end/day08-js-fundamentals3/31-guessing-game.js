'use strict';
/*
- Generate a random number from 0-3
- User to guess that number
- If they guess it, it should tell them they're right
- If they're wrong, the app should tell them they're wrong.
*/

var randomNum = Math.floor(Math.random()*3);
var userGuess = prompt('We picked a number from 0-10. Can you guess it?');

// We have to use == instead of === because the data type of prompt() is a string, not a number.
if (userGuess == randomNum) {
	console.log('You got it!');
} else {
	console.log('Wrong. The correct answer is ' + randomNum);
};


