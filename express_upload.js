var express = require("express");
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser");
var multer = require("multer");
app.use(express.static("resource"));
app.use(bodyParser.urlencoded({extended:false}));
app.use(multer({desc:"/temp/"}).array('image'));


app.get("/index.htm",function(req,res){
	res.sendFile(__dirname+"/index_upload.htm");
});

app.post("/file_upload",function(req,res){
	console.log(req.files[0]);

	var des_file = __dirname+"\\" + req.files[0].originalname;
	console.log("des_file:"+des_file);
	console.log("filepath:"+req.files[0].path);

		fs.writeFile(des_file,req.files[0].buffer,function(err){
			if(err){
				console.error(err);
			}
			else{
				 response = {
                   message:'File uploaded successfully', 
                   filename:req.files[0].originalname
               }
			}
			console.log(response);

			res.send(JSON.stringify(response));
		})

	// fs.readFile(req.files[0].path,function(err,data){
	// 	fs.writeFile(des_file,data,function(err){
	// 		if(err){
	// 			console.error(err);
	// 		}
	// 		else{
	// 			 response = {
 //                   message:'File uploaded successfully', 
 //                   filename:req.files[0].originalname
 //               }
	// 		}
	// 		console.log(response);

	// 		res.send(JSON.stringify(response));
	// 	})
	// })

	// response = {
 //        message:'File uploaded successfully'
 //    }
 //    res.send(JSON.stringify(response));
})

var server = app.listen(8088,function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log("express实例访问地址  http://%s:%s",host,port);
})