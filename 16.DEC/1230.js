// hoisting  : 끌어올림

var msg = 'i < 3 Javascript';

var f = function () {

	console.log(msg);
	var msg = 'mah spoon is too big';
};

f(); // undefined;
