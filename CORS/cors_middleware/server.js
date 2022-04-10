// 1.引入Express框架，并创建Express实例
const express = require('express')
// 2.创建网站服务器对象
const app = express()

// 引入cors，返回的是一个函数，直接()执行，执行后是一个Express中间件，app.use使用它即可
app.use(require('cors')())

// 3.定义路由
// 第一个参数是请求的路径，'/'代表根路径localhost:3000
// 第二个参数是一个函数，req是request的缩写，表示客户端提交过来的数据
// res是respond的缩写，表示要响应回的数据
app.get('/', (req, res) => {
  // send()方法，响应给客户端信息
  // 1. send方法内部会检测响应内容的类型
  // 2. send方法会自动设置http状态码
  // 3. send方法会帮我们自动设置响应的内容类型及编码
  res.send('Hello Express!')
})

// 4.监听端口，第二个参数回调函数启动成功后执行的内容
app.listen(3000, () => {
  console.log('网站服务器启动成功！')
})