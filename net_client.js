var net = require("net");
var client = net.connect({port:8088},function(){
	console.log("connect to server");
})

client.on("data",function(chunk){
	console.log(chunk.toString());
	client.end();
})
client.on("end",function(){
	console.log("client close connection to server")
})