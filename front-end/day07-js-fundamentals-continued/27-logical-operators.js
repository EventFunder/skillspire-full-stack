'use strict';
//    Logical operators can be used with boolean values (or with using comparison 
//	  operators to create boolean values)
/*
      Logical operators are binary operators just like arithmetic operators.
      Arithmetic operators: +, -, *, /, %
      Logical operators: &&, ||, !


&&    This operator means 'and'
||    This operator means 'or'
!     This operator means 'not'

*/


// && returns true only if BOTH values on left and right equate to true

console.log((true) && (true));    //true
console.log((true) && (false));   //false
console.log((true) && (!false));  //true


// || returns true if EITHER of the values on the left or right are true.
console.log((true) || (false));   //true
console.log((false) || (false));  //false
console.log((true) || (true));    //true

console.log((2 > 1) && (4 === 4));  // This will evaluate as true since both sides are true.
console.log((true) && !(3 > 5));    // This will evaluate to false since the value on the
                                    // right is false.


// Logical operators ask a question:

// Is it the case that both these values on the left and right are true? 
true && false // false

// Is it the case that EITHER of these are true?
true || false // true
false || false // false