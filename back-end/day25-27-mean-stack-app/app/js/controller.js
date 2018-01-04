// Defining an Angular.js model. Modules are used to associate an Angular app with part of an 
// HTML document. They also provide access to Angular.js features.
var contactsApp = angular.module('contactsApp', []);

contactsApp.controller('mainController', function ($scope, $http) {

	function clearInputs() {
		$scope.contact.firstName = '';
		$scope.contact.middleName = '';
		$scope.contact.lastName = '';
		$scope.contact.number = '';
		$scope.contact.email = '';
	}

	var getContacts = function () {
		// Retrieve contact data from server. '/contacts' is the route that we'll get the data from.
		$http.get('/contacts').then(function (response) {
			// $scope allows us to use this contacts variable in the html file and loads the data into browser.
			$scope.contacts = response.data;
		});
	}

	getContacts();

	$scope.postContact = function() {
		console.log($scope.contact);
		$http.post('/contacts', $scope.contact).then(function (response) {

			getContacts();
			clearInputs();
		});
	}

	$scope.deleteContact = function(id) {
		console.log(id);
		$http.delete('/contacts/' + id).then(function (response) {
			getContacts();
		});
	}

	$scope.edit = function(id) {
		//console.log(id);
		$http.get('/contacts/' + id).then(function (response) {
			$scope.contact = response.data;
			//console.log(response.data);
		});
	}

	$scope.putContact = function() {
		//console.log($scope.contact._id);
		$http.put('/contacts/' + $scope.contact._id, $scope.contact).then(function (response) {
			getContacts();
			clearInputs();
		})
	}

});