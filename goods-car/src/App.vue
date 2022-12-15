<template>
  <div id="app-container">
    <Header></Header>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import Footer from '@/components/Footer/Footer.vue'
import axios from 'axios'

export default {
  created() {
    this.initData()
  },
  components: {
    Header,
    Footer
  },
  methods: {
    async initData() {
      const {data: result} = await axios.get('https://www.escook.cn/api/cart')
      console.log(result);
    }
  }
}
</script>

<style lang="less">
#app-container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
