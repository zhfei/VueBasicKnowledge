<template>
  <div id="app-container">
    <Header></Header>
    <Goods v-for="item in list" 
    :key="item.id" 
    :id="item.id"
    :goods_name="item.goods_name" 
    :goods_img="item.goods_img" 
    :goods_price="item.goods_price"
    :goods_state="item.goods_state"
    @changeGoodsState="handleCheck"
    ></Goods>
    <Footer :allSelectState="selectAllState"></Footer>
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
    },

    handleCheck(val) {
      console.log(val);
      this.list.filter(item => item.id===val.id).forEach(item=>{
        item.goods_state = !item.goods_state
      })
    }
  },
  computed: {
    selectAllState() {
      return this.list.every(item=>item.goods_state)
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
