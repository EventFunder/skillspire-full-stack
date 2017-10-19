// An important aspect of functions is that any variables created inside a
// function are only accessible within the function. This is what we call 
// 'local' scope.


//Global scope -- variable can be accessed anywhere
var user1 = 'Farhad';

function greet() {
	console.log('Hello ' + user1);
};

// I can log user1 and I'll see 'Farhad' returned because this variable has
// global scope.
console.log(user1);

// Local scope -- variable can only be accessed from inside the function it was
// created in.  In the below code, user2 is only accessible inside the 
// greetDaud function
function greetDaud() {
	var user2 = 'Daud';
	console.log('Hello ' + user2);
};

// The below statement will throw an error saying user2 is not defined. Not
// because user2 wasn't defined, but because it was created inside a 
// function and its scope is local to that function.
console.log(user2);