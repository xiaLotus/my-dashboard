const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack');


module.exports = defineConfig({
  // 這行不用動
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        // 關閉 hydration 不匹配的詳細信息
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
        // 啟用 Options API
        __VUE_OPTIONS_API__: true, 
         // 關閉生產環境的 DevTools
        // 根據環境動態設置 npm run serve 使用 development
        __VUE_PROD_DEVTOOLS__: process.env.NODE_ENV === 'production' ? false : true, 
      })
    ]
  }
})
