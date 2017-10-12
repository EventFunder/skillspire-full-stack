'use strict';

// Boolean Values have two possible values: true or false.

// One way of producing boolean values is by using the following comparison operators:

//  ==     -Checks if a value is equal to another
//  ===    -Checks if a value is 'strictly' equal to another
//  !=     -! means 'not'. So this checks if one value is not equal to another
//  !==    -Checks if a value is strictly not equal to another
//  <      -Checks if the value on left is less than the value on the right
//  >      -Checks if the value on left is greater than the value on the right
//  <=     -Checks if the value on left is less than or equal to the value on right
//  >=     -Checks if the value on left is greater than or equal to value on right


console.log(3 > 2)  //true

// Checks if Unicode value of the first letter is great than the value of the first 
// letter on the right. The Unicode standard assigns a number to every character. 
// This evaluates to true because the Unicode value of 's' is less than 'b'.

console.log('sherlock' > 'batman'); //true
                      
console.log('harry potter' > 'hermione');  //false


// We can also use these comparison operators to compare the length of one string
// with another string.

console.log('harry potter'.length > 'hermione'.length);  //true


// NaN is the result of a statement that doesn't make sense. The reason this is 
// false is that the result of one nonsensical statement isn't equal to the result 
// of another.
console.log(NaN == NaN)  //false