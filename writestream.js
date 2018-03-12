var fs = require("fs");
var data = "这是我要想入的内容哦";

var writeStream = fs.createWriteStream("output.txt");
writeStream.write(data,"utf8");
writeStream.end();

writeStream.on("data",function(c){
	console.log(c);
});

writeStream.on("finish",function(){
	console.log("写入完成");
});

writeStream.on("error",function(err){
	console.log(err);
});

console.log("程序执行完毕");