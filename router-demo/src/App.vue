<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <!-- <a href="#/home">主页</a>
    <a href="#/center">个人中心</a>
    <a href="#/about">关于</a> -->

    <!-- 在vue-router中，使用router-link代替a标签，并且里面的to属性表示要跳转的路由地址 -->
    <router-link to="/home">主页</router-link>
    <router-link to="/center">个人中心</router-link>
    <router-link to="/about">关于</router-link>

    <!-- <component :is="comName"></component> -->
    <!-- 使用vue-router默认就存在这个占位组件，这个是路由视图的出口 -->
    <router-view></router-view>
  </div>
</template>

<script>
import Home from '@/components/Home/Home.vue'
import Center from './components/Center/Center.vue'
import About from './components/About/About.vue'

export default {
  name: 'RouterDemoApp',
  components: {
    Home,
    About,
    Center
  },

  created () {
    window.onhashchange = () => {
      switch (location.hash) {
        case '#/home':
          this.comName = 'Home'
          break
        case '#/center':
          this.comName = 'Center'
          break
        case '#/about':
          this.comName = 'About'
          break
      }
    }
  },

  data () {
    return {
      comName: 'Home'
    }
  },

  mounted () {

  },

  methods: {

  }
}
</script>
