// This is an IIFE (Immediately Invoked Function Expression)
(function() { 


})();



// Remember that JS is functionally scoped

var fname = 'Farhad'; // This is a globally scoped variable available
                      // outside the function

function greet() {
	console.log fname;
};

greet();


// imLocal is a locally scoped variable and is not available outside
function localScopedVar() {
	var imLocal = 'I\'m hiding in a function coz I\'m cool like that.'
	console.log(local);
};

console.log(imLocal); //this will fail