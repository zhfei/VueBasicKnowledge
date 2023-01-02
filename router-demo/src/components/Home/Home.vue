<template>
  <div class="home-container">
    Home组件-编程式导航

    <hr>
    <button @click="handlePush">push:调用</button>
    <button @click="handleReplace">replace:调用</button>
    <button @click="handleGo">go:调用</button>
    <!-- 行内使用编程式导航，要省略this,否则报错 -->
    <button @click="$router.forward()">go便捷调用-forward前进一步</button>
    <button @click="$router.back()">go便捷调用-back后退一步</button>
    <button @click="$router.push('/main')">进入Main页面</button>

  </div>
</template>

<script>
export default {
  name: 'RouterDemoHome',

  data () {
    return {

    }
  },

  mounted () {

  },

  methods: {
    handlePush () {
      // this.$router.push('hash地址')， 会产生历史记录
      this.$router.push('/about/tab2')
    },
    handleReplace () {
      // this.$router.replace('hash地址')，跳转到目标地址，并替代掉当前的历史记录
      this.$router.replace('/center/movie/3')
    },
    handleGo () {
      // this.$router.go(-1) go(正数)向前， go(负数)后退
      this.$router.go(-1)
    }

  }
}
</script>

<style scoped>
.home-container {
  height: 200px;
  background-color: rgb(236, 13, 207);
  width: 100%;
}

</style>
