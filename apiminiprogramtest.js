var fs = require("fs");
var http = require("http");

var data = fs.readFileSync("apiminiprogram.txt");
console.log("同步读取成功\n");

var urls = data.toString().split("\n");
for (var i = 1; i >= 0; i--) {
	for (var i = urls.length - 1; i >= 0; i--) {
	var url = urls[i];
	fclosure(url);
}

function fclosure(url){
	return http.get(url, (res) => {
  		//console.log(`${url} ${res.statusCode}`);
  		console.log(url+ ":" + res.statusCode);
		//consume response body
		//res.resume();
		}).on('error', (e) => {
		  console.log(`${url}:${e.message} \n`);
		});
	}
}

