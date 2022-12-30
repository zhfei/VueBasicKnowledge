import Vue from 'vue'
import App from './App.vue'
import routerObj from '@/router/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 路由实例挂载
  router: routerObj
}).$mount('#app')
