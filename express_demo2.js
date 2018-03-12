var express = require("express");
var app = express();
var util = require("util");

app.get("/",function(req,res){
	console.log("主页GET请求");
	res.send("Hello GET");
});

app.post("/",function(req,res){
	console.log("主页POST请求");
	res.send("Hello POST");
});

app.get("/del_user",function(req,res){
	console.log("/del_user GET请求");
	res.send("del_user 删除用户路由");
})

app.get("/ab*cd",function(req,res){
	console.log("/ab*cd GET请求");
	res.send("正则路由");
})

var server = app.listen(8086,function(){
	var host=server.address().address;
	console.log(util.inspect(server.address(),true));
	var port=server.address().port;
	console.log("server run at http://%s:%s",host,port);
})