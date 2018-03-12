var fs = require("fs");

var data="";
var readStream = fs.createReadStream("input.txt");
readStream.setEncoding("utf8");

readStream.on("data",function(chr){
	data += chr;
});

readStream.on("end",function(){
	console.log("end，内容为：" + data);
});

readStream.on("finish",function(){
	console.log("finish，内容为：" + data);
});

readStream.addListener("error",function(error){
	console.log(error);
});

readStream.emit("finish");
readStream.emit("error");

console.log("程序执行完毕");