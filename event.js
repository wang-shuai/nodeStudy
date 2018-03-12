var events = require("events");
var emitter = new events.EventEmitter();

emitter.on("some_event",function(arg1,arg2){
	console.log("lister1:",arg1,arg2);
});
emitter.on("some_event",function(arg1,arg2){
	console.log("lister2:",arg1,arg2);
});

var t = emitter.listeners("some_event");
console.log(t.length);
console.log(events.EventEmitter.listenerCount(emitter,"some_event"));

emitter.emit("some_event","123","456");

console.log("程序执行结束")