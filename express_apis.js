var express = require("express");
var app = express();
app.use(express.static("resource"));

// console.log(app.locals)

app.get("/",function(req,res){
	res.send("hello world");
});

// express实例的 mountpath - 匹配的路径模式

var admin = express();
admin.get("/",function(req,res){
	console.log(admin.mountpath);
	res.send("admin homepage");
})

var secret = express()
secret.get("/",function(req,res){
	console.log(secret.mountpath);// 输出匹配路径模式 /secr*t
	console.log(req.baseUrl); // 输出访问路径 /manager/secret
	res.send("admin secret")
})

admin.use('/secr*t',secret);
app.use(["/adm*n","/manager"],admin);



var server = app.listen(8090,function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log("express实例访问地址  http://%s:%s",host,port);
})