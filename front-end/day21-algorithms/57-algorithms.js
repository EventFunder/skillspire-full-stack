/*
1) 

Create a greet function that takes two parameters - a first name
and a last name. Return a greeting to the user and concatonate
the first and last names.

	Example: If I call the function and pass the arguments 'John'
			 and 'Smith', it should return 'Hello, John Smith'
*/

function greet(firstName, lastName) {
	return 'Hello, ' + firstName + lastName;
}

greet('John', 'Smith');
greet('Mohamed', 'Farrah');

/*
2)  Create a function that checks if a user's password is correct. 
	If the password passed as the argument is "alpaca49" log a 
	message to the console telling the user it's correct. Otherwise, 
	tell the user that the password is incorrect.

	Invoke it twice - once with the correct password, once with
	incorrect password
*/

function checkPassword(password) {
	if (password === 'alpaca49') {
		console.log('Password is correct. Welcome.');
	} else {
		console.log('Incorrect password.');
	}
}

checkPassword('alpaca49');
checkPassword('nopaca49');

/*
3)  Create a function that checks if a username and password are 
	correct. The function should take two strings as arguments - 
	the first is a username, and the second is a password.  If the 
	username is "Russell Wilson" and the password is "qb4lyf", log 
	a message to the console saying "You may enter." If the username 
	or password are different, log a message to the console saying 
	"username or password is incorrect."

	Invoke the function twice. Once with correct username/password
	and once with wrong username/password
*/

function login(username, password) {
	if (username === 'Russell Wilson' && password === 'qb4lyf') {
		console.log('You may enter.');
	} else {
		console.log('Username or password is incorrect.');
	}
}

login('Russell Wilson', 'qb4lyf');
login('Russell Brand', 'Iwasneverqb');

/*
4)  Create a function that logs numbers 5-10. This function should
	take no parameters.
*/

function logNums() {

	for (var i = 5; i<=10; i++) {
		console.log(i);
	}
}

/*
5) Create a function that takes an array as an argument. Return 
	the zeroth item in the array.

	Example: If I call the function and pass [5, 3, 7] as an 
	argument, it should return the zeroth item.
*/

function zerothItem(arr) {
	return arr[0];
}

zerothItem([3, 1, 45]);
zerothItem([3, 12122, 5, 23, 999, 23]);

/*
6)  Create a function that takes an array as an argument. Return 
    the length of the array.

	Example: If I call the function and pass [54, 2, 65] as an 
	argument, it should return 3.
*/

function arrayLength(arr) {
	return arr.length;
}

arrayLength([23, 1, -34]);
arrayLength([2323, 123, 34, 34, 2]);

/*
7)  Create a function that takes an array as an argument and logs 
	each value in the array to the console.

	Example: If I call the function and pass [23, 7, 12, 1], it 
			 should log:
							23
							7
							12
							1
*/



