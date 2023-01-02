import Vue from 'vue'
import App from './App.vue'
import router from '@/router'

// 导入样式
import './assets/css/bootstrap.css'
import './index.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 挂载路由实例对象
  router 
}).$mount('#app')
