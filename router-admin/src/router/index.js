import Vue from 'vue'
import VueRouter from 'vue-router'
import FilterArray from './FilterArray'
import MyLogin from '@/components/MyLogin.vue'
import MyHome from '@/components/MyHome.vue'
import MyGoods from '@/components/menus/MyGoods.vue'
import MyOrders from '@/components/menus/MyOrders.vue'
import MyRights from '@/components/menus/MyRights.vue'
import MySettings from '@/components/menus/MySettings.vue'
import MyUsers from '@/components/menus/MyUsers.vue'
import MyUserDetail from '@/components/user/MyUserDetail.vue'

// 在Vue中挂载插件VueRouter
Vue.use(VueRouter)


const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: MyLogin },
    // 重定向：确定原来地址url是啥，看着不爽，要重定向到哪个url
    { path: '/home',  
      redirect: '/home/users',
      component: MyHome ,
      children: [
        { path: 'users', component: MyUsers },
        { path: 'settings', component: MySettings },
        { path: 'rights', component: MyRights },
        { path: 'orders', component: MyOrders },
        { path: 'goods', component: MyGoods },
        { path: 'userinfo/:id', component: MyUserDetail, props: true}
      ]},
  ]
})

// 添加路由全局前置守卫，当本地没有存在登录token时，跳转到home将被拦截到login页
router.beforeEach((to, from ,next)=>{
    if (FilterArray.indexOf(to.path) !== -1) {
      const token = localStorage.getItem('token')
      if (token) {
        next()
      } else {
        next('/login')
      }
    } else {
      next()
    } 
 })

// 导出路由实例
export default router;