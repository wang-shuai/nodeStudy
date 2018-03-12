var util = require("util");

console.log(util.isArray([]))

console.log(util.isArray(new Array()))

console.log(util.isArray({}))

console.log(util.isDate(new Date()))

console.log(util.isDate(Date()))

console.log(util.isRegExp(/abc/))

console.log(util.isRegExp(new RegExp("abc")))

console.log(util.isRegExp([]))

console.log(util.isError(new Error()))

console.log(util.isError(new TypeError()))

console.log(util.isError({name:"error",message:"error message"}))