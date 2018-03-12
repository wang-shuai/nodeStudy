var events = require("events");
var eventEmitter = new events.EventEmitter();

var listener1 = function(){
	console.log("listener1");
}
var listener2 = function(){
	console.log("listener2");
}
var error = function(){
	console.log("程序错误");
}

eventEmitter.on("error",error);
eventEmitter.on("connection",listener1);
eventEmitter.addListener("connection",listener2);

var len = events.EventEmitter.listenerCount(eventEmitter,"connection");
console.log(len + "个监听器在监听connection事件")
eventEmitter.emit("connection");

//移除一个监听器
eventEmitter.removeListener("connection",listener1);

len = events.EventEmitter.listenerCount(eventEmitter,"connection");
console.log(len + "个监听器在监听connection事件")
eventEmitter.emit("connection");

eventEmitter.emit("error");

console.log("程序执行完毕。");