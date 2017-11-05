/*
What is scope?
The idea of scope is very simple: scope tells us where a piece of data is accessible.
There are two kinds of scope: global and local.  

Global scope:
A variable with "global scope" can be accessed from anywhere in our program.  

Local scope:
A variable created inside of a function has "local scope." It can only be accessed from 
inside the function it was created in.
*/


// This variable has global scope because it wasn't created inside a function.
var globalVariable = 'I\'m global.';

// Variables that are global can be accessed from anywhere. For example, we're 
function createLocalScope() {
	console.log ('I can access this: ' + globalVariable);
}

// Variables created within a function can only be accessed within that function
function createLocalScope() {
	var localVariable = 'I\'m local to this function';
	console.log(localVariable);
}

// Because localVariable was created inside createLocalScope(), it can't be accessed
// outside of that function.  The below code will fail.
console.log(localVariable);


// Scope affects not just variables, but functions as well. A function nested within
// another function can only be accessed inside of that function.

function globalFunction() {

	function localFunction() {
		console.log('This function is local and can only be accessed within the function it was created in.');
	}

	// Calling localFunction() inside of globalFunction() will work
	localFunction();
}


// This won't work
localFunction();



/*
IN CLASS ASSIGNMENT

Steps:
1. Create a global variable. 
2. Create a global function that logs that variable.
3. Create a function nested inside the previous function.
4. Inside the nested function, create a variable called local;
   the value of local should be the string 'local var.'
5. Log local var to the console.
*/
