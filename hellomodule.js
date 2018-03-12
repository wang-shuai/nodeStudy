//module.exports
var hello = require("./module");

hello();
//hello.test();//error
new hello().test();

//exports
var hello1 = require("./exports")
hello1.Hello();
new hello1.Hello().test();

console.log(__filename);