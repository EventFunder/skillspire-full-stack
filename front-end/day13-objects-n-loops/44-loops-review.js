// I have an array of numbers. Log the sum of those numbers.

var arr = [1, 2, 3];

var sum = 0;
for (var i=0; i<arr.length; i++) {
	sum += arr[i];
}



// Jon and Sam are competitive speakers. They're rated in 3 categories: argument strength, clarity, and originality. In each category,
// they're given a rating of 1-10.


var jonPoints = [3, 5, 9];
var samPoints = [5, 2, 7];

function pointComparison(arr1, arr2) {
	var arr1Total = 0;
	var arr2Total = 0;

	for (var i=0; i<3; i++) {
		if (arr1[i] > arr2[i]) {
			arr1Total++;
		} else if (arr2[i] > arr1[i]) {
			arr2Total++;
		}
	}

	if (jonPoints > samPoints) {
		console.log('Jon wins.');
	} else if (samPoints > jonPoints) {
		console.log('Sam wins.');
	} else {
		console.log('Tie');
	}
}

// Given an array of numbers, log the largest number.
// Given an array of numbers, log the smallest number.