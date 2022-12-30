<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <a href="#/home">主页</a>
    <a href="#/center">个人中心</a>
    <a href="#/about">关于</a>

    <component :is="comName"></component>
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
