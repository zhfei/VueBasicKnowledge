<template>
  <div>
    <router-view />

    <van-tabbar route>
      <van-tabbar-item to="/" icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item to="/user" icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',

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

<style lang="less" scoped>

</style>
