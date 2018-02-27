// 引入四个模块
let http=require("http")
let fs=require("fs")
let url=require("url")
let querystring=require("querystring")

http.createServer(function(request,response){

let urlobj=url.parse(request.url)//截取字符串
console.log(urlobj)//urlobj.pathname是/login.html
if(urlobj.pathname=="/login.html"){
	// 打开的页面
	//第一种方法 readFile一次性的把文件里的内容全部读取出来
	// fs.readFile("index.html",function(error,data){
	// 	// response响应头(状态码，响应头对象)
	// 	response.writeHead(200,{"Content-Type":"text/html"});
	// 	// 需要将缓存的data，响应给浏览器（结束响应的过程）
	// 	response.end(data);
	// })
	// 第二种方法 createFileStream是一点点的去处理这个文件用过的地方会被垃圾回收机制回收掉所占的内存就会很小
	fs.createReadStream("index.html").pipe(response)
}
}).listen(9000,"127.0.0.1",function(){//监听需要的端口号以及本机地址
	console.log("node server running on port : 9000")
})//窗口输入node fs-url-querystring模块 ，然后在浏览器输入http://127.0.0.1:9000/login.html?username=1&password=2查看结果