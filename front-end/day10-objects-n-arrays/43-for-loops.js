'use strict';

// A while loop is used if you don't know how long a condition will be true.
// A for loop is used if you already know how long a condition will be true.

// Here is the syntax for a for loop
//Index is the count. As long as condition is true, the loop will run.
for(index; condition; increment) {  

	//task
}

// Here's how you would log numbers 0 to 5 just like in previous examples.
// Take note of which loop takes up the fewest lines to accomplish a task.
// This is a big part of "KISS" (Keep It Simple Stupid).

for(var index=0; index <= 5; index++) {
	console.log(index);
}



// Use contact list as example.
// Here's how it was done with a while loop:
var contactList = ['Jon Snow', 'Arya', 'Cirsi', 'Tyrian', 'Greyworm'];

var count2 = 0;
while (count2 < contactList.length) {
	document.write('<p>' + contactList[count2] + '</p>');
	count2++;
}


// Here it is with a for loop.
for (var i = 0; i < contactList.length; i++) {
	document.write('<p>' + contactList[count2] + '</p>');
}



// A common interview question will be to write the following using a for loop:

/*

#
##
###
####
#####
######

*/

var str = '#';

for(var i=0; i<=5; i++) {
	console.log(str);
	str += '#'; // str = str + '#'
}
