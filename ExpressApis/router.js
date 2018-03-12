var express = require("express");
var app = express();

var authRouter = express.Router();
var openRouter = express.Router();

authRouter.use(require('../module'));

authRouter.get('/:user_id/edit', function(req, res, next) { 
  // ... Edit user UI ... 
  console.log("authRouter",req.path);
});
openRouter.get('/', function(req, res, next) { 
  // ... List users ... 
  console.log(req.path);
})
openRouter.get('/:user_id', function(req, res, next) { 
  // ... View user ... 
  console.log("openRouter",req.path)
})

app.use('/users', authRouter);
app.use('/users', openRouter);

var server = app.listen(8090,function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log("express实例访问地址  http://%s:%s",host,port);
})