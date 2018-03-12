var dns = require("dns");

dns.lookup("www.daikuan.com",function(err,address,family){
	console.log("ip：",address);
	console.log("family:",family);
	dns.reverse(address,function(err,hostnames){
		if(err){
			console.error(err.stack);
		}

		console.log("reverse"+address +": " + JSON.stringify(hostnames));
	})
})