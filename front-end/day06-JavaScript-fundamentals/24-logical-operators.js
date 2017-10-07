// Logical operators can be used with boolean values (or with using comparison operators
// to create boolean values)

&& // This operator means 'and'
|| // This operator means 'or'
!  // This operator means 'not'

(true) && (true)  // && returns true if both values on left and right equate to true
//true

(true) && (false)
//false

(true) && (!false)
//true

(true) || (false) // || returns true if EITHER of the values on the left or right are true.
				  // If the value on the left returns true, the compiler won't evaulate
				  // the value on the right since the result is already known to be true.
//true

(false) || (false)
//false

(true) || (true)
//true

(2 > 1) && (4 === 4) // This will evaluate as true since both sides are true


(true) && !(3 > 5)



//  Create two statements using logical operators
    //  - use two 4 different boolean operators for comparison