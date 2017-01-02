// Inheritance patterns
var Car = function(loc) {
	this.loc = loc;
};
Car.prototype.move = function() {
	this.loc++;
};
var Van = function(loc) {
	Car.call(this, loc);
	//this를 명확하게 하기 위해서이다. 이런식으로 안하고 new Car(loc)하면 Car 안에서의 this가 window를 가리키게 된다.
};
Van.prototype = Object.create(Car.prototype);
// 이런 식으로 상속한다.
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
