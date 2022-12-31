import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About/About.vue'
import Center from '@/components/Center/Center.vue'
import Home from '@/components/Home/Home.vue'

// 将Router安装为Vue的插件
Vue.use(Router)

// 创建路由的实例对象
const router = new Router({

  routes: [
    // 地址重定向，当跳转的URL地址没有对应组件时，那么就会强制跳转到另一个地址
    { path: '/', redirect: '/home' },
    // 路由匹配规则，实例对应是根据匹配规则，从上到下逐条匹配的
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/center', component: Center }
  ]
})

export default router
