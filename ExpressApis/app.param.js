var express  = require("express");
var app = express();

app.param(['id','page'],function(req,res,next,val){
	console.log("only math once with:",val)
	next();
})

app.get("/user/:id/:page",function(req,res,next){
	console.log("only math once");
	next();
})

app.get("/user/:id/:page",function(req,res){
	console.log("only math once");
	res.end();
})

var server = app.listen(8090,function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log("express实例访问地址  http://%s:%s",host,port);
})