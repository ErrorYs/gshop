const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [path.resolve(__dirname, './src/theme')]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: false
    }
  },
  chainWebpack (config) { // 设置默认路径
    config.resolve.alias
      .set('components', resolve('src/components'))
      .set('common', resolve('src/common'))
  }
}
