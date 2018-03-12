var file=require("fs");

var content = file.readFileSync("helloworld.js");
console.log("文件内容："+content);
console.log("程序执行完成")