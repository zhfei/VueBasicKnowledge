const path = require('path')

module.exports = {
  resolve: {
      //告诉webpack,@符号表示src这一层目录， 开始时推荐使用“@/images/logo.jpj”来导入模块
      alias: {
          "@": path.join(__dirname, './src/')
      }
  }
}
