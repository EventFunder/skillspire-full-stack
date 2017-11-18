'use strict';

// Defining an Angular.js module. Modules are used to associate an Angular app with part of an 
// HTML document. They also provide access to Angular.js features. 'myApp' is the name of the module
var myApp = angular.module('myApp', []);


// The controller will have two purposes: 
//		1) to store existing contact objects and 
//		2) use form input to create new contacts
// $scope is how we bind values from JS to HTML. Values we create with $scope in JS can be accessed in HTML
myApp.controller('mainController', function($scope) {
	$scope.contacts = [
		{name: 'Sherlock', number: '444-4444', email: 'holmes@bakerstreet.com'},
		{name: 'Gregory', number: '333-3333', email: 'housemd@itsnotlupus.com'},
		{name: 'James', number: '222-2222', email: 'youropinion@mrspock.com'},
		{name: 'Tyrion', number: '444-5555', email: 'idrinkandiknowthings@got.com'}
	];

	// ng-model from our html file will bind the input values to our AngularJS variables
	$scope.addContact = function() {
		$scope.contacts.push({name: $scope.contact.name, number: $scope.contact.number, email: $scope.contact.email});

		console.log($scope.contacts);

		// clear input boxes
		$scope.contact.name = '';
		$scope.contact.number = '';
		$scope.contact.email = '';

	}

});