var http = require("http");
var fs = require("fs");
var url = require("url");

http.createServer(function(request,response){
	var pathname = url.parse(request.url).pathname;

	console.log("request for ", pathname);

	if(pathname.length>1){
		fs.readFile(pathname.substr(1),function(err,data){
		if(err){
			console.error(err);
			response.writeHead(404,{"Content-Type":"text/html;charset=utf8"});
		}
		else{
			response.writeHead(200,{"Content-Type":"text/html;charset=utf8"});
			response.write(data.toString());
		}
		response.end();
	});
	}
	
}).listen(8089);

console.log("server is running at http://127.0.0.1:8089/");