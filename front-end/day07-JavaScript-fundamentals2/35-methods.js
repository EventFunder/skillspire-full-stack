// Methods are functions that are attached to an object
// When using methods, objects should be created using constructors

var zayaan = new Object();
zayaan.height = '5 feet, 7 inches';
zayaan.age = 14;
zayaan.location = 'Bellevue';

zayaan.setLocation = function(newLocation) {
	zayaan.location = newLocation;
};

zayaan.setLocation('Seattle');

console.log(zayaan.location); // this will show us Zayaan's new location


// Create an object with your name and create a method that resets
// your age.
