import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About/About.vue'
import Center from '@/components/Center/Center.vue'
import Home from '@/components/Home/Home.vue'
import Tab1 from '@/components/Tabs/Tab1.vue'
import Tab2 from '@/components/Tabs/Tab2.vue'
import Movie from '@/components/Movie/Movie.vue'

// 将Router安装为Vue的插件
Vue.use(Router)

// 创建路由的实例对象
const router = new Router({

  routes: [
    // 地址重定向，当跳转的URL地址没有对应组件时，那么就会强制跳转到另一个地址
    { path: '/', redirect: '/home' },
    // 路由匹配规则，实例对应是根据匹配规则，从上到下逐条匹配的
    { path: '/home', component: Home },
    // 嵌套路由，就是在对应路由容器配置项上增加children属性， 然后在这个子路由配置上增加嵌套子路由的配置。
    // 嵌套子路由的path配置无需是/开头，默认router会自动添加
    {
      path: '/about',
      component: About,
      // 默认子路由方法1：设置父路由的重定向地址
      // redirect: '/about/tab1',
      children: [
        // { path: 'tab1', component: Tab1 },
        // 默认子路由方法2：在父路由的children中，设置默认路由的path:'', 这样表示父路由默认展示这个子路由
        { path: '', component: Tab1 },
        { path: 'tab2', component: Tab2 }
      ]
    },
    {
      path: '/center',
      component: Center,
      children: [
        // id部分是可变路由的参数部分，它是随参数变化的。
        { path: 'movie/:mid', component: Movie, props: true }
      ]
    }
  ]
})

// 全局路由守卫，当每次路由跳转时，会先调用这个回调函数，判断是否可以继续跳转
router.beforeEach((to, from, next) => {
  /* must call `next` */

  console.log(to)
  next()
})

export default router
