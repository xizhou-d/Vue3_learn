const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
        // 配置路径别名
        alias: {
            // @ 是已经配置好的别名：对应的是 src 路径
            "utils": "@/utils"
        }
    }
  }
})
