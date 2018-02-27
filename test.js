let urlsplit=require('./urlsplit.js')
let str="username=admin&password=123&timeout=10000&isLogged=true&systemVersion=10"
let finished=urlsplit.parse(str)
// console.log(finished)//打印出
//{ username: 'admin',
//   password: '123',
//   timeout: '10000',
//   isLogged: 'true',
//   systemVersion: '10' }