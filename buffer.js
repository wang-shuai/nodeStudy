

var buf = new Buffer(10);
var len = buf.write("www.daikuan.com",3,10);

console.log("写入字节数："+ len);

buf = new Buffer("http://www.daikuan.com/","utf-8");
console.log(buf.toString());

buf = new Buffer(26);
for (var i = buf.length - 1; i >= 0; i--) {
	buf[i] = i+97;
}
console.log(buf.toString("ascii"));
console.log(buf.toString("ascii",0,5));
console.log(buf.toString("utf-8",0,5));
console.log(buf.toString(undefined,0,5))
// console.log(buf.toJSON());

var buf1 = new Buffer("study ");
var buf2 = new Buffer("node.js");
var buf3 = Buffer.concat([buf1,buf2]);
console.log("buf3内容：" +buf3.toString());

var result = buf1.compare(buf2);
if(result < 0)
	console.log (buf1 + " 在 " + buf2 +" 之前")
else if(result == 0 )
	console.log (buf1 + " 等于 " + buf2 +" ")
else console.log (buf1 + " 在 " + buf2 +" 之后")

buf3.copy(buf2,4,0,5);
console.log(buf2.toString());

console.log(buf3.length);
buf1 = buf3.slice(6,10);
console.log(buf1 + "");
