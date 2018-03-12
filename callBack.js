var file=require("fs");

file.readFile("helloworld.js",function(error,data){
	if(error){console.error("error:"+error);}
	else console.log("data:"+data);
});

console.log("程序执行完成")