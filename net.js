// 引入net模块
var net=require("net");
var user={}//存储当前聊天室的用户
var count=0;//当前在线人数
var server=net.createServer(function(scoket){
		scoket.write("welcome to node chat,now"+count+"at this time .your name\r\n")
		count++//人员增加
		var nickname//临时存储用户输入的姓名
		var temp="";
// 公共的广播方法
function brodcast(msg){
for(var i in user){
	if(i!=nickname){
		user[i].write(msg)
	}
}
}
		scoket.on("data",function(data){
			console.log(data)
			temp+=data;
			if(temp.indexOf("\n")===-1){
				return;
			}
			data=temp.replace(/\r|\n/g,"");
			if(!nickname){
				if(user[data]){
					scoket.write("nickname already in use , try \r\n");
					temp="";
					return
				}else{
					nickname=data;
					user[nickname]=scoket;
					brodcast(nickname+"join the room\r\n")
				}
			}else{
				brodcast(nickname+"say"+data+"\r\n")
			}
			temp="";
		})
		// 用户离开
		scoket.on("close",function(){
			count--;
			delete user[nickname];
			brodcast(nickname+"leave the room\r\n")
		})
	})
server.listen(9000,function(){//监听需要的端口号以及本机地址
	console.log("server listening on 9000")
})//窗口输入node net 再打开一个窗口输入telnet 127.0.0.1 9000去进行开启（telnet在win7下默认是不开启的，所以需要自己手动开启选择打开或关闭windows功能找到telnet客户端打勾）窗口就会打印出writ的值
//注意测试的时候打开一个窗口输入telnet 127.0.0.1 9000就相当于进入了一个人