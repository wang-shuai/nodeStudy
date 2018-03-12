
function mod (){
	console.log("调用了mod方法");
	
	console.log(__filename);

	this.test = function(){
		console.log("mod.test被调用");
	}
}

module.exports= mod;