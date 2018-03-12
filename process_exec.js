const child_process = require("child_process");

for(var i=0;i<3;i++){
	var workerProcess = child_process.exec("node childprocess.js " + i,
		function(err,stdout,stderr){
			if(err){
				console.log(err.stack);
				console.log("error code:",err.code);
				console.log("singal received: " + err.signal);
			}
			console.log("stdout:"+stdout);
			console.log("stderr:"+stderr);
		})

		workerProcess.on("exit",function(code){
			console.log("子进程退出码："+code);
		})
}
