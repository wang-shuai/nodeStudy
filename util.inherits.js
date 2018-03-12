var util = require("util");

function base(){
	this.name="shuai";
	this.age=30;
	this.sayHello=function(){
		console.log("hello," + this.name);
	};
}

base.prototype.showName = function(){
	console.log("protoType.showName:" + this.name);
}

function sub(){
	this.name = "wang";
}

util.inherits(sub,base);


var objBase = new base();
objBase.sayHello();
objBase.showName();
console.log(objBase);

var objSub = new sub();
objSub.showName();
//objSub.sayHello(); //age、name、sayHello 等属性都不能被继承，只有prototype原型中定义的函数可以被继承
console.log(objSub);