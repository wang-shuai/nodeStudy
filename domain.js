var events = require("events");
var domain = require("domain");

var emitter1 = new events.EventEmitter();

var domain1 = domain.create();
domain1.on("error",function(err){
	console.log("domain1 handle this exception" + err.message);
})

domain1.add(emitter1);

emitter1.on("error",function(err){
	console.log("emitter1 handle this exception" + err.message);
})

emitter1.emit("error",new Error("监听器处理异常"));

emitter1.removeAllListeners();
emitter1.emit("error",new Error("domain1 处理异常"))


var domain2 = domain.create();
domain2.on("error",function(err){
	console.log("domain2 handle this exception" + err.message);
})

domain2.run(function(){
	var emitter2 = new events.EventEmitter();
	emitter2.on("error",function(err){
		console.log("emitter2 handle this exception" + err.message);
	})
	emitter2.emit("error",new Error("监听器处理异常"));
})

domain1.remove(emitter1);
emitter1.emit("error",new Error("无domain和监控处理异常，程序崩溃"))