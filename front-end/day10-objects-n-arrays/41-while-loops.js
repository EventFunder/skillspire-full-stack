'use strict';
/*
	First figure out how to force a program to end.

	Mac: cmd + option + esc
	PC: cntrl + alt + del

*/

// While loops perform a task as long as a condition is true

while (condition) {
	// some task

	// something to prevent the condition from running infinitely
}



// Loops are useful for performing tasks without having to
// write the same code multiple times.

// Let's say I want to write numbers 0-5.
console.log(0);
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);


var count = 0;

while (count <= 5) {
	console.log(count);
	count++; // prevents infinite loop.
}


var contactList = ['Jon Snow', 'Arya', 'Cirsi', 'Tyrian', 'Greyworm'];

var count2 = 0;

while (count2 < contactList.length) {
	document.write('<p>' + contactList[count2] + '</p>');
	count2++;
}