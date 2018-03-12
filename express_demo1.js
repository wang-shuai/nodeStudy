var express = require("express");
var app = express();
app.use(express.static("resource"));

app.get("/",function(req,res){
	res.send("hello world");
});

var server = app.listen(8090,function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log("express实例访问地址  http://%s:%s",host,port);
})