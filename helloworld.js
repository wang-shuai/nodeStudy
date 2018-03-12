console.log("hello world.js");

console.log(__filename);

console.log(__dirname);

function printHello(){
	console.log("hello world!");
}

var t = setTimeout(printHello,2000);

clearTimeout(t);

var ti = setInterval(printHello,200);
setTimeout(function(){
	clearInterval(ti);
},2010);