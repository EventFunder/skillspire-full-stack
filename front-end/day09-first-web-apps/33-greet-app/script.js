'use strict';
// IIFE (immediately invoked function expression)
(function () {

	var nameForm = document.getElementById('name-form');

 	//event listner to perform task when user clicks 'submit' button
 	nameForm.addEventListener('submit', function() {

 		var fnameInput = document.getElementById('input-first-name');
		var lnameInput = document.getElementById('input-last-name');
		var outputParagraph = document.getElementById('p-full-name');

	 	event.preventDefault(); // Prevents page from refreshing

	 	// IF either input box is empty, tell user to input their first/last name.
	 	// ELSE greet the user
		if (fnameInput.value === '' || lnameInput.value === '') {
			outputParagraph.innerHTML = 'You need to enter your first name and last name.';
		} else {

	 		//Access each html element to ouput my data
 			outputParagraph.innerHTML = 'Welcome, ' + fnameInput.value + ' ' + lnameInput.value + '.';

	 		//Clear the textboxes
	 		fnameInput.value = '';
	 		lnameInput.value = '';
		}
 	})


})() // closing the IIFE