<template>
  <div class="center-container">
    Center组件
    <hr>
    <!-- 动态路由，将路由地址中随业务动态变化的部分声明成参数类型，如果：movie/:id, id是可变的参数 -->
    <router-link to="/center/movie/1">三国演义</router-link>
    <router-link to="/center/movie/2">红楼梦</router-link>
    <router-link to="/center/movie/3">西游记</router-link>
    <router-link to="/center/movie/4">水浒传</router-link>
    <hr>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'RouterDemoCenter',

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
.center-container {
  height: 200px;
  background-color: rgb(22, 209, 238);
  width: 100%;
}

</style>
