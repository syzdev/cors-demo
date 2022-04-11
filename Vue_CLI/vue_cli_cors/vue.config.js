const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        // secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
  },
})
