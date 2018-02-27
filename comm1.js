let name="张三"
// 变量、函数、其他模块是不能直接访问的
// 公布出去(三种方法)
module.exports.name="张三"
exports.name1="李四"
module.exports={
	name:"zhangsan",
	name1:"lisi"
}//下面的name和name1会覆盖上面的窗口打印出zhangsan lisi