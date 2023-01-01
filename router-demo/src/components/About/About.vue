<template>
  <div class="about-container">
    About组件
    <hr>
    <!-- 嵌套路由，就是在子组件的内部，写上嵌套子路由的router-link, router-view -->
    <router-link to="/about/tab1">Tab1</router-link>
    <router-link to="/about/tab2">Tab2</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'RouterDemoAbout',

  data () {
    return {

    }
  },

  mounted () {

  },

  methods: {

  }
}
</script>

<style scoped>
.about-container {
  height: 200px;
  background-color: antiquewhite;
  width: 100%;
}

</style>
