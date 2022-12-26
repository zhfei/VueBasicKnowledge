import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false

// 设置axios的域名根路径
axios.defaults.baseURL = 'http//:www.top50.com'
// 将axios对象挂载到Vue的原型对象上，这样每个Vue实例都可以通过this.axios访问的到。
Vue.prototype.axios = axios

new Vue({
  render: h => h(App)
}).$mount('#app')
