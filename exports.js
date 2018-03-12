
exports.Hello = function(){
	console.log("hello exports");
	console.log(__filename);
	this.test = function(){
		console.log("exports.Hello.test被调用")
	}
}