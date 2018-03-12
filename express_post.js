var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var urlencodedParser = bodyParser.urlencoded({extended:false});

app.use(express.static("resource"));

app.get('/index.htm',function(req,res){
	res.sendFile(__dirname+"/index_post.htm");
})

app.post("/process_post",urlencodedParser,function(req,res){
	var response={
		"f_name":req.body.first_name,
		"l_name":req.body.last_name
	};
	console.log(response);
	res.send(JSON.stringify(response));
})

var server = app.listen(8088,function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log("express实例访问地址  http://%s:%s",host,port);
})