proxyTable: {
    "/api": {
      target: "http://192.168.0.111:8888/", //这里是修改你要访问的后台服务器的ip+端口
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''  //这里理解成用‘/api’代替target里面的地址,
      }
    }  
 