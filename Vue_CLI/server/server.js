const express = require('express')
const app = express()
app.get('/msg', (request, response) => {
  // 设置响应体
  response.send('Vue_CLI')
})
app.listen(3000, () => {
  console.log('服务已启动，监听3000端口')
})