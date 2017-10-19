'use strict';

var guessForm = document.getElementById('guess-form');

guessForm.addEventListener('submit', function() {
	event.preventDefault();
	
	var userChoice = document.getElementById('user-guess-input');
	var outputP = document.getElementById('output-p');
	var computerChoice = Math.floor(Math.random()*11);
	
	if (userChoice.value == computerChoice) {
		outputP.innerHTML = 'That\'s right! The correct answer was ' + computerChoice + '!';
	} else {
		outputP.innerHTML = 'Nope. The correct answer was ' + computerChoice + '.';
	}

	userChoice.value = '';

})