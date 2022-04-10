const express = require('express')
const app = express()
app.get('/', (request, response) => {
  // 设置响应头，允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*')
  // 设置响应体
  response.send('setHeader')
})
app.listen(3000, () => {
  console.log('服务已启动，监听3000端口')
})