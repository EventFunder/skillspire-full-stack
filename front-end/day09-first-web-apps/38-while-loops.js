// Figure out how to escape first

// While loops are used when you know the exact number of times you want to
// accomplish the same task.

// Here's what the syntax of a while loop looks like:

while (condition) {
	//some task
}

// As long as the condition in parenthesis is true, the task will be performed.

// Example: Say we want to console.log numbers 0 to 5. We can either just write it out
// 11 times as follows:

console.log(0);
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);


// Or we can create a loop to handle the task

var num = 0;

while (num <= 5) {
	console.log(num);
	num++; // note that this is the same as writing num = num + 1;
};


/* 
    Loops are commonly used with arrays.
    Let's take the example of an app. Pandora might have an array of songsLikes
    by each user.
*/

// Below we have created an array of songsLiked and we will console.log each item
// within this array.

var songsLiked = ['Beat It', 'Hey Jude', 'Help', 'Piano Man',];

var index = 0;
while (index <= songsLiked.length-1) {
	console.log(songsLiked[index]);
	index++; // index++ is the same as writing index = index + 1;
};