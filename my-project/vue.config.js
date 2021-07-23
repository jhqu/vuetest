module.exports = {
    runtimeCompiler: true,
    publicPath: '/', // 设置打包文件相对路径
    devServer: {
      // open: process.platform === 'darwin',
      // host: 'localhost',
      port: 8071,
      // open: true, //配置自动启动浏览器
      proxy: {
        '/Api': {
          target: 'https://api.apiopen.top/',// 对应自己的接口
          changeOrigin: true,
          ws: true,
          pathRewrite: {
            '^/Api': ''

          }
        }
      }
     },
  }