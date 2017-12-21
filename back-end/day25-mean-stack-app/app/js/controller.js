// Defining an Angular.js model. Modules are used to associate an Angular app with part of an 
// HTML document. They also provide access to Angular.js features.
var contactsApp = angular.module('contactsApp', []);


contactsApp.controller('mainController', function ($scope, $http) {

	// Retrieve contact data from server. '/contacts' is the route that we'll get the data from.
	$http.get('/contacts').then(function (response) {
		// $scope allows us to use this contacts variable in the html file and loads the data into browser.
		$scope.contacts = response.data;
		console.log('Client-side received the data requested from the server');
	});

});