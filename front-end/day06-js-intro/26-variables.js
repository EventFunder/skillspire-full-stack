// Variables are used to save data by assigning values to a variable. Variables must begin with
// a number or letter and cannot contain special characters.

// The following line declares a variable without assigning a value.
var firstname;

// The following line declares a variable and defines it by assigning a value.
var firstname = 'Clark';

// The following line declares and assigns values to multiple variables
var firstname = 'Clark', lastname = 'Kent';

// You can also use variables to assign values to a variable

var username = firstname + ' ' + lastname;

console.log(username);
//"Clark Kent"

username = 'Dean Winchester' // The same variable can also be assigned new values

console.log(username);
//"Dean Winchester"

// Here's an example of how variables can be used to make arithmetic easier
var basesalary = 50000
var tax = basesalary / 15;
var netsalary = basesalary - tax;

console.log(netsalary);
// 46666.666666666664


var savings = 200;
savings = savings + 50;
savings += 100;


// Create variables concatonating other variables
// Create variables involving a math equation