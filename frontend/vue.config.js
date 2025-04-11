const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: path.resolve(__dirname, '../docs'),
  publicPath: '/DataDriven/' // 👈 hardcoded path for GitHub Pages
})
