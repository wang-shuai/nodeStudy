var express = require("express");
var app = express();

app.use(express.static("resource"));

app.get('/index.htm',function(req,res){
	res.sendFile(__dirname+"/index_get.htm");
})

app.get("/process_get",function(req,res){
	var response={
		"f_name":req.query.first_name,
		"l_name":req.query.last_name
	};
	console.log(response);
	res.send(JSON.stringify(response));
})

var server = app.listen(8088,function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log("express实例访问地址  http://%s:%s",host,port);
})