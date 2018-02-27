let http=require("http")
var options={
	host:"127.0.0.1",
	port:9000,
	path:"/",
	method:"get"
}
// 客户端
var req=http.request(options,function(response){
if(response.statusCode==200){
	console.log("ok 200")
}
response.on("data",function(d){
	console.log("data"+d.toString())
})
})
req.end();