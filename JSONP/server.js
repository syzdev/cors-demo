let express = require('express')
let app = express()
app.get('/', (request, response) => {
  let callback = request.query.callback
  const data = JSON.stringify({
    data: 'JSONP'
  })
  response.send(callback + `(${data})`)
})
app.listen(3000, () => {
  console.log('服务已启动，监听3000端口')
})
