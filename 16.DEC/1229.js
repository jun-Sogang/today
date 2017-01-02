//this.key 와 this[key]의 차이점

if(typeof key === "string"){
	this.key = something; //using
}
else{
	this[key] = something;
}
