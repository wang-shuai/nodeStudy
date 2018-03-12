var fs = require("fs");

fs.readFile("input.txt",function(error,data){
	if(error){
		return console.error(error);
	}
	console.log("异步读取："+data);
});

var data = fs.readFileSync("input.txt");
console.log("同步读取："+data);


console.log("准备打开文件！")
fs.open("input.txt","r+",function(err,fd){
	if(err){
		return console.error(err);
	}
	console.log(fd);
	console.log("文件打开成功！");
});


fs.stat("/",function(err,stats){
	if(err){
		return console.error(err);
	}
	console.log(stats);
	console.log(stats.isFile());
	console.log(stats.isDirectory());
})


fs.writeFile("output.txt","我是写进去的内容",function(err){
	if(err){
		console.error(err);
	}

	fs.readFile("output.txt",function(err,data){
		if(err){
			console.error(err);
		}
		console.log("异步读取 异步写入的内容：" + data);
	})
})


fs.open("input.txt","r+",function(err,fd){
	if(err){
		return console.error("打开文件异常："+err);
	}
	console.log("文件打开成功");

	var buf = new Buffer(1024);
	fs.read(fd,buf,0,buf.length,0,function(err,bytes){
		if(err){
			return console.error("读取文件异常"+err);
		}
		
		console.log(bytes+"字节被读取");
		if(bytes>0){
			console.log("读取到的内容为："+buf.slice(0,bytes).toString());
		}

		fs.close(fd,function(err){
			if(err){
				return console.error("关闭文件错误："+err);
			}
		console.log("文件关闭成功");
		})

	});
})


fs.open("input.txt","r+",function(error,fd){
	if(error){
		console.error(error);
	}

	fs.ftruncate(fd,15,function(err){
		if(err){
			console.error(err);
		}

		var buf = new Buffer(1024);
		fs.read(fd,buf,0,buf.length,0,function(err,bytes){
			if(err){
				console.error(err);
			}
			if(bytes>0){
				console.log("截取的文件内容：" +buf.slice(0,bytes).toString());
			}
		})

		fs.close(fd,function(err){
			if(err){
				console.error(err);
			}
			console.log("文件关闭成功")
		})
	})
})

fs.unlink("input.txt.gz",function(error){
	console.log("文件删除成功")
})

console.log("程序执行完毕！");