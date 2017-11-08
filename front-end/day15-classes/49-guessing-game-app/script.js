'use strict';

var guessForm = document.getElementById('guess-form');
var userInput = document.getElementById('user-input');
var outputP = document.getElementById('output-p');


guessForm.addEventListener('submit', function() {

	// Prevent form submisison from refreshing page
	event.preventDefault();

	var computerChoice = Math.floor(Math.random()*11);
	var userChoice = userInput.value;

	if (userChoice == computerChoice) {
		outputP.innerHTML = 'You got it! The answer was ' + computerChoice;
	} else {
		outputP.innerHTML = 'Wrong! The answer was ' + computerChoice;
	}
});