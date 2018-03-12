var util = require("util");

function person(){
	this.name="shuai";
	this.toString = function(){
		return this.name;
	};
	this.sayHello = function(){
		console.log("hello," + this.name);
	}
}

console.log(util.inspect(person))
console.log(util.inspect(person,true))

var p = new person();
console.log(util.inspect(p))
console.log(util.inspect(p,true))

