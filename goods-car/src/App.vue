<template>
  <div id="app-container">
    <Header></Header>
    <Footer></Footer>
    <Goods v-for="item in list" :key="item.id" :goods_name="item.goods_name" :goods_img="item.goods_img"></Goods>
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import Footer from '@/components/Footer/Footer.vue'
import Goods from './components/Goods/Goods.vue'
import axios from 'axios'

export default {
  created() {
    this.initData()
  },
  data() {
    return {
      list: []
    }
  },
  components: {
    Header,
    Footer,
    Goods
  },
  methods: {
    async initData() {
      const {data: result} = await axios.get('https://www.escook.cn/api/cart')
      console.log(result);
      if (result.status === 200) {
        this.list = result.list
      }
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
