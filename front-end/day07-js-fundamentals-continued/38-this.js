// The 'this' keyword acts as a placeholder for an object name.

var harry = new Object();
harry.occupation = 'wizzard';
harry.age = 14;

var bruce = new Object();
bruce.occupation = 'vigilante';
bruce.age = 35;

var kirk = new Object();
kirk.occupation = 'starship captain';
kirk.age = 42;


var setAge = function(newAge) {
	this.age = newAge;
};

harry.setAge = setAge;
bruce.setAge = setAge;
kirk.setAge = setAge;