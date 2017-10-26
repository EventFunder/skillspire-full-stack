'use strict';

// We covered some ARITHMETIC OPERATORS on day 6, but we didn't cover all of them.
3+4;
5-3;
4*43;
6/3;


/*

Here are some additional arithmetic operators:

++
--

*/

// Let's say I have a number that I want to increment. Here's one way to do it:
var num = 5;
num = 6;

// What if I don't know the value assigned to num but want to increment? Or if I'm iterating through a loop?
// ++ used to increment
num = num + 1;
num++;



// -- used to decrement
var num2 = 5;
num = num - 1;
num--;




// ASSIGNMENT OPERATORS
/*

=     -assigns the value of the data on the right to the variable on the left
+=
-=

*/

// I have a salary of 90,000 and received 
// a bonus of 500
var salary = 90000;
var bonus = 500;

salary = salary + bonus;  // salary = 90000 + 500
salary += bonus;  // this is a more succinct way of writing the previous line



// Let's say I'm a waiter who makes $800 every two weeks. I just broke a dish. That gets taken out of my paycheck.
var waiterSalary = 800;
var dishPrice = 10;

waiterSalary -= dishPrice; 
// waiterSalary = waiterSalary - dishPrice
// waiterSalary =   800 - 10

// What if I knocked over a stack of 5 dishes!
waiterSalary -= dishPrice * 5;