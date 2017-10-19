// Here is the syntax for a for loop
//Index is the count. As long as condition is true, the loop will run.
for(var index; condition; increment) {  

	//task
};

// Here's how you would log numbers 0 to 5 just like in previous examples.
// Take note of which loop takes up the fewest lines to accomplish a task.
// This is a big part of "KISS" (Keep It Simple Stupid).

for(var index=0; index <= 5; index++) {
	console.log(index);
};


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
};
