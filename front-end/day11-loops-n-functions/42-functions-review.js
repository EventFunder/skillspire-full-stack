// Function Practice



// FUNCTIONS WITHOUT PARAMETERS

// create a function that greets Frank Sinatra with an alert. Then invoke the function.
function greetSinger() {
	alert('Hello, Frank Sinatra');
}



// create a function that logs number 5 to the console. Then invoke the function.
function log5() {
	console.log(5);
}

// create a function that prompts the user to enter their age. Then invoke the function.
function checkUserAge() {
	var userAge = prompt('How old are you?');
}

// declare a function that prompts the user to enter their age AND tells them
// to go away if they're under 18. Then invoke the function.
function checkUserAge2() {
	var userAge = prompt('How old are you?');

	if (userAge < 18) {
		console.log('gtfo');
	}
}

// declare a function that prompts the user to enter their age. If the user is
// under 18 tell them to go away. Otherwise let the user enter the site.
function checkUserAge3() {
	var userAge = prompt('How old are you?');

	if (userAge < 18) {
		console.log('gtfo');
	} else {
		'Welcome.'
	}
}





// FUNCTIONS WITH PARAMETERS

// declare a function that takes a name as a parameter and greets that person
function greet(user) {
	console.log('Hello, ' + user);
}

// create a function that returns the area of a square by taking the size of one side as a parameter
function sqrArea(length) {
	return length * length;
}

// declare a function that takes a number as a parameter and returns that number multiplied by 5
function times5(num) {
	return num * 5;
}



// FUNCTIONS WITH MULTIPLE PARAMETERS

// create a function that returns the area of a rectangle and takes the length and width as parameters
function rectArea(l, w) {
	return l * w;
}

// create a function that takes a username and password as parameters. If the user is your name AND the password
// is spongebobsquarepants then let the user in.
function logIn(username, password) {
	if (username === 'Boba Fett' && password === 'spongebobsquarepants') {
		console.log('Welcome, Boba Fett.');
	}
}

// create a function that takes a username and password as parameters. If the user is your name AND the password
// is spongebobsquarepants then let the user in.