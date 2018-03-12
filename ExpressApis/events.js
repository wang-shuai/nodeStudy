var express = require("express");
var app = express();
app.use(express.static("resource"));

// 该方法应放置在所有路由之前，做一些通用操作，并且不应该返回任何信息
// 结尾调用next方法，别的路由继续处理并返回相应信息给客户端
app.all('*', function(req,res,next){
	console.log("app match all request");
	//res.send("app match all request");//不应该返回任何信息
	console.log(next);
	next();
});
//貌似跟下边这个一样
app.use(function(req,res,next){
	console.log("time:%d",Date.now());
	next();//如果不调用next 则后边的路由全都被拦截了，同上
})

var admin = express();

admin.get("/",function(req,res,next){
	console.log("admin homepage",req.method);
	res.send("admin homepage");
})
admin.on("mount",function(parent){
	console.log("admin mounted");
	//console.log(parent);
})

app.get("/",function(req,res){
	res.send("hello world");
});

app.use("/admin",admin);

var server = app.listen(8090,function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log("express实例访问地址  http://%s:%s",host,port);
})