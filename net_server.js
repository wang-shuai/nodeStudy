var net = require("net");
var os = require("os");
var server = net.createServer(function(connection){
	console.log("client connnected");
	connection.on("end",function(){
		console.log("client connection closed");
	});
	connection.write("hello world " + os.EOL );
	connection.pipe(connection);
})
server.listen(8088,function(){
	console.log("server is listening");
})
server.on("error",function(err){
	console.log(err);
})
