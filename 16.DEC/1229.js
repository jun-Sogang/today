//this.key �� this[key]�� ������

if(typeof key === "string"){
	this.key = something; //using
}
else{
	this[key] = something;
}
