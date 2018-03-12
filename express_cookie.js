var express = require("express");
var cookieParser = require("cookie-parser");

var app = express();
app.use(cookieParser());

app.get("/",function(req,res){
	console.log("cookies:",req.cookies);
	res.send("cookies");
})

app.listen(8088);