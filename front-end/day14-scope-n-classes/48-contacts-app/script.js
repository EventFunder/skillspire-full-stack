

var newContactForm = document.getElementById('new-contact-form');
var contactNameInput = document.getElementById('contact-name-input');
var contactNumberInput = document.getElementById('contact-number-input');
var contactEmailInput = document.getElementById('contact-email-input');
var contactTableBody = document.getElementById('contact-table-body');


function Contact(name, number, email) {
	this.name = name;
	this.number = number;
	this.email = email;
}


 //event listner to perform task when user clicks 'submit' button
 newContactForm.addEventListener('submit', function() {

	event.preventDefault(); // Prevents page from refreshing

	// Create new contact objects
	var newContact = new Contact(contactNameInput.value, contactNumberInput.value, contactEmailInput.value);


	contactTableBody.innerHTML += 
	'<tr>' +
		'<td>' + newContact.name + '</td>' +
		'<td>' + newContact.number + '</td>' + 
		'<td>' + newContact.email + '</td>' + 
	'</tr>';

})