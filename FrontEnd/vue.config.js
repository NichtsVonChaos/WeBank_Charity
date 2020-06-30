module.exports = {
  devServer: {
    host: "localhost", 
    port: 8083, //看Vue运行在哪个端口 然后更改  跨域
    https: false,  
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true, // 允许跨域
        ws: true, 
        pathRewrite: { // 重写路径
          '^/api': ''
        }
      }
    }
  },
  assetsDir: 'static'
}
