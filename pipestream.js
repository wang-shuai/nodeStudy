var fs = require("fs");

var writeStream = fs.createWriteStream("output.txt");
var readStream = fs.createReadStream("input.txt");

readStream.pipe(writeStream);

console.log("pipe完毕")