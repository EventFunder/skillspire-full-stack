'use strict';

// ARITHMETIC OPERATORS
3+4
5-3
4*43
6/3

// ...

++
--


var num = 5;

num = 6;
// What if I don't know the value assigned to num but want to increment?
num = num + 1;
num++;

// Decrement?
num = num-1;
num--;





// ASSIGNMENT OPERATORS

= // = assigns the value of the data on the right to the variable on the left
+=
-=

var salary = 90000;
var bonus = 500;

salary = salary + bonus;
// salary = 90000 + 500
salary += bonus;




var waiterCheck = 800;
// I broke a dish
var dishPrice = 10;

waiterCheck -= dishPrice; 
// waiterCheck = waitercheck - dishPrice
// waiterCheck =   800 - 10

// I knocked over a stack of 5 dishes!
waiterCheck -= dishPrice * 5;