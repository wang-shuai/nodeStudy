var http = require("http");
var url = require("url");

function start(route){
	http.createServer(function(request,response){
		var pathname = url.parse(request.url).pathname;
		console.log("request for " + pathname + " received");

		route(pathname);

		response.writeHead(200,{"Content-Type":"text/plain"});
		response.write("hello router");
		response.end();
	}).listen(8888);

	console.log("server has started http://127.0.0.1:8888/");
}

exports.start = start;