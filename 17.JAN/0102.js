// Inheritance patterns
var Car = function(loc) {
	this.loc = loc;
};
Car.prototype.move = function() {
	this.loc++;
};
var Van = function(loc) {
	Car.call(this, loc);
};
Van.prototype = Object.create(Car.prototype);
Van.prototype.constructor = Van;
Van.prototype.grab = function() {};

var zed = new Car(3);
console.log(zed.loc);
zed.move();
console.log(zed.loc);
var amy = new Van(9);
console.log(amy.loc);
amy.move();
console.log(amy.loc);
amy.grab();
console.log(amy.constructor);


///
