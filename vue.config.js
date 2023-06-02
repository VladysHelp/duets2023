const { defineConfig } = require('@vue/cli-service')
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/choir/",
  outputDir: path.resolve(__dirname, "./docs"),
  pwa: {
    workboxOptions: {
      exclude: [/_redirects/]
    }
  }
})
