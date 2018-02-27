// 引入四个模块
let http=require("http")
let fs=require("fs")
let url=require("url")
let querystring=require("querystring")
// 创建服务(服务器端)
http.createServer(function(request,response){
	// 判断请求的类型（get/post）
	console.log(request.method)
	
// 判断浏览器传过来的url
let filename="";
let urlobj=url.parse(request.url)//截取字符串
let pathname=urlobj.pathname;
if(pathname=="/"){
	filename="login.html";
	fs.createReadStream(`login/${filename}`).pipe(response)//es6字符串模版
}else if(pathname=="/checkuser.html"){
	let params="";
	if(request.method=="GET"){
		// 是否包含参数
	if(urlobj.query){
		// 使用querystring解析参数
		params=querystring.parse(urlobj.query);
		
	}
	}else if(request.method=="POST"){
		var postdata="";
		request.on("data",function(data){
			postdata+=data;
		})
		request.on("end",function(){
			console.log(postdata)
			params=querystring.parse(postdata);
			if(params.username=="1"&&params.password=="2"){
			filename="profile.html"
		}else{
			filename="404.html"
		}
		fs.createReadStream(`login/${filename}`).pipe(response)
		})
	}

	
	
}else{
		filename="404.html"
		fs.createReadStream(`login/${filename}`).pipe(response)
	}
// 读取文件流，作为响应发给浏览器（下面两种方式是一样的效果）
// fs.createReadStream("login/"+filename).pipe(response)//字符串拼接
// fs.createReadStream(`login/${filename}`).pipe(response)//es6字符串模版
	}).listen(9000,"127.0.0.1",function(){//监听需要的端口号以及本机地址
	console.log("running on 9000")
})
