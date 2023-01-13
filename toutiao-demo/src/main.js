import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 1. 引入你需要的组件
import Vant from 'vant'
// 2. 引入组件样式
import 'vant/lib/index.css'

Vue.config.productionTip = false

// 将Vant组件库注册到Vue插件中
Vue.use(Vant)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
