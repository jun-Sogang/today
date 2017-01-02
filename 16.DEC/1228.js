//Definition of Closure

//스코프에 있지 않은 것을 사용할 수 있게 하는 것
//클로져는 스코프에 있지 않은 변수를 가리키는 하나 하나를 의미한다.



//Prototype
var obj2 = {
	x: 2
};

var obj1 = Object.create(obj2);
obj1.a = obj1.x;

//obj.x 는 obj2에 가서 x값을 불러온다.

obj1.x = obj1.x;

//first obj1.x는 obj1에 x라는 키를 가지게 하고 second obj1.x는 obj2.x에 가서 접근한다
