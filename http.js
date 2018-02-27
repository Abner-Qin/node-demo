// node搭建node服务器
// 导入http模块
let http=require("http")
// 使用http建立服务器
// 接收参数：
 // 请求处理函数，自动添加到 request 事件，函数传递两个参数：
 //    request  请求对象，想知道req有哪些属性，可以查看 “http.request 属性整合”。
 //    response   响应对象 ，收到请求后要做出的响应。想知道res有哪些属性，可以查看 “http.response属性整合”。
http.createServer(function(request,response){
// response响应头(状态码，响应头对象)
response.writeHead(200,{"Content-Type":"text/html"});
// response响应体
response.write("<h1>66611</h1>")
// 结束响应的过程
response.end();
}).listen(9000,"127.0.0.1",function(){//监听需要的端口号以及本机地址
	console.log("start:9000")
})//窗口输入node http 输出start:9000，然后在浏览器输入http://127.0.0.1:9000即可在页面中看到写的h1标签内容666