// You already know one assignment operator - the equal sign (=). Other assignment 
// operators are used to change the value of an existing variable.

=
++
--
+=
-=
*=
/=

// When do we use them?
// ++ is used to increment values by 1
// -- is used to decrement values by 1

//The following 3 lines accomplish the same task
var expenses = 0;
expenses++;
expenses = expenses + 1;

//The following 3 lines accomplish the same task
var expenses = 10;
expenses --;
expenses = expenses - 1;


// += and -= are used for incrementing or decrementing by more than 1.

// The following lines accomplish the same task
var expenses = 10;
expenses += 50;
expenses = expenses + 50;

// The following lines accomplish the same task
var expenses = 10;
expenses -= 50;
expenses = expenses - 50;

// *= and /= are used the same way. They reasign the value of a variable by multiplying
// or dividing by the specified number.

// The following lines accomplish the same task
var expenses = 10;
expenses *= 5;
expenses = expenses * 5;

// The following lines accomplish the same task
var expenses = 10;
expenses /= 2;
expenses = expenses / 2;

// You're buying an orange worth $3, three apples worth $4 each, and two
// loaves of bread worth $4 each.  You then have to return one apple and
// one loaf of bread.
// Show me each step that occurs using assignment operators.
