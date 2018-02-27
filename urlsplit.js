// url:http://www.baidu.com/login.html?username=admin&password=123
let str="username=admin&password=123&timeout=10000&isLogged=true&systemVersion=10"
let s1=str.split("&")[0].split("=")
let s2=str.split("&")[1].split("=")
// str.split("&")打印出[ 'username=admin', 'password=123' ]
// console.log(s1,s2)//打印出[ 'username', 'admin' ] [ 'password', '123' ]
// 如果参数再多两个在写s3，s4很麻烦，所以以封装的模式写
// 需要解析的字符串作为参数传递进来
function parse(string){
	let obj={};
	string.split("&").map(function(item){
		let key=item.split("=")[0]//相当于username
		let value=item.split("=")[1]//相当于admin
		obj[key]=value;//相当于username=admin
	})
	return obj;
}
module.exports.parse=parse;