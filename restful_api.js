var express = require("express");
var app = express();
var fs = require("fs");

var jsonData = "";

app.get("/",function(req,res){
	console.log("api 服务中");
	fs.readFile(__dirname+"/users.json","utf8",function(err,data){
		console.log(data);
		jsonData=JSON.parse(data);
	})
	res.end("api 服务中");
})

app.get("/listusers",function(req,res){
	res.end(JSON.stringify(jsonData));
})

var user = {
	"user4":{
		"name":"mohit",
		"password":"password4",
		"profession":"teacher",
		"id":4
	}
}

app.get("/adduser",function(req,res){
	jsonData["user4"] = user["user4"];
	console.log(jsonData);
	res.end(JSON.stringify(jsonData));
})

app.get("/:id",function(req,res){
	var u = jsonData["user"+req.params.id];
	console.log(u);
	res.end(JSON.stringify(u));
})

app.get("/deluser/:id",function(req,res){
	delete jsonData["user"+req.params.id];
	console.log(jsonData);
	res.end(JSON.stringify(jsonData));
})

var server = app.listen(8088,function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log("express实例访问地址  http://%s:%s",host,port);
})