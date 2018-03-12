var os = require("os");

console.log(os.tmpdir());
console.log(os.endianness());
console.log(os.hostname());
console.log(os.type());
console.log(os.platform());
console.log(os.arch());
console.log(os.release());
console.log(os.uptime());
console.log(os.loadavg());
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.cpus());
console.log(os.networkInterfaces());
console.log(os.EOL);//操作系统换行符


var path= require("path");
console.log(path.normalize(".\\os.js"));
console.log(path.normalize("..\\os.js"));

console.log(path.join("E:","Nodejs" ,"os.js"));

console.log(path.resolve("..",".\\os.js"));//相当于一层层 cd 命令 + pwd
console.log(path.isAbsolute("os.js"));
var tpath = "e:\\nodejs\\os.js";
console.log(path.relative(tpath,"E:\\nodejs")) //两个路径的相对关系
console.log(path.dirname(tpath))
console.log(path.extname(tpath));
console.log(path.basename(tpath,path.extname(tpath)))

console.log(path.parse(tpath));
console.log(path.format(path.parse(tpath)));

console.log(path.sep)
console.log(path.delimiter)
console.log(path.posix)
console.log(path.win32)