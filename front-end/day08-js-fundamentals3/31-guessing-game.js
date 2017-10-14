var userChoice = prompt('We picked a number between 0-10. Guess the number.');
var computerChoice = Math.floor(Math.random()*2);

if (userChoice == computerChoice) {
	alert('That\'s right!');
} else {
	alert('Nope. The correct answer was ' + computerChoice + '.');
};
