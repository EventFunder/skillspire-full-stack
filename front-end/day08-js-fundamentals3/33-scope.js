// An important aspect of functions is that any variables created inside a
// function are only accessible within the function. This is what we call 
// 'local' scope.


//Global scope -- variable can be accessed anywhere
var fname1 = 'Farhad';

function greet() {
	console.log('Hello ' + fname1);
};

// I can log fname1 and I'll see 'Farhad' returned because this variable has
// global scope.
console.log(fname1);

// Local scope -- variable can only be accessed from inside the function it was
// created in.  In the below code, fname2 is only accessible inside the 
// greetSabah function
function greetSabah() {
	var fname2 = 'Sabah';
	console.log('Hello ' + fname2);
};

// The below statement will throw an error saying fname2 is not defined. Not
// because fname2 wasn't defined, but because it was created inside a 
// function and its scope is local to that function.
console.log(fname2);