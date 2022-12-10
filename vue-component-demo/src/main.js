import Vue from 'vue'
import App from './App.vue'
import Left from '@/components/Left.vue'
import Right from '@/components/Right.vue'

Vue.config.productionTip = false

Vue.component('MyLeft', Left)
Vue.component('MyRight',Right)

new Vue({
  render: h => h(App),
}).$mount('#app')
