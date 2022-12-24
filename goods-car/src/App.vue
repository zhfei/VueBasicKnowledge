<template>
  <div id="app-container">
    <Header></Header>
    <Goods v-for="item in list" 
    :key="item.id" 
    :id="item.id"
    :goods_name="item.goods_name" 
    :goods_count="item.goods_count"
    :goods_img="item.goods_img" 
    :goods_price="item.goods_price"
    :goods_state="item.goods_state"
    @changeGoodsState="handleCheck"
    >
    <Counter v-slot:default :count="item.goods_count" :id="item.id" @changeOneCount="handleCountChange"></Counter>
  </Goods>
    <Footer :allSelectState="selectAllState" :allSelectPrice="selectAllPrice" :allSelectCount="selectAllCount" @selectAll="handleSelectAll"></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import Footer from '@/components/Footer/Footer.vue'
import Goods from './components/Goods/Goods.vue'
import Counter from '@/components/Counter/Counter.vue'
import axios from 'axios'
import bus from '@/tools/EventBus'

export default {
  created() {
    this.initData()
    bus.$on('changeOneCount', (val)=>{
      console.log(val);
      this.list.some(item=>{
        if (item.id === val.id) {
          item.goods_count = val.count
          return true
        }
      })
    })
  },
  data() {
    return {
      list: []
    }
  },
  components: {
    Header,
    Footer,
    Goods,
    Counter
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
    },
    handleSelectAll(val) {
      this.list.forEach(item=>item.goods_state=val)
    },
    handleCountChange(val) {
      console.log(val);
      this.list.some(item=>{
        if (item.id === val.id) {
          item.goods_count = val.count
          return true
        }
      })
    }
  },
  computed: {
    selectAllState() {
      return this.list.every(item=>item.goods_state)
    },
    selectAllPrice() {
      return this.list
      .filter(item=>item.goods_state)
      .reduce((total, item)=>{
        return total += item.goods_price*item.goods_count
      }, 0);
    },
    selectAllCount() {
      return this.list
      .filter(item=>item.goods_state)
      .reduce((total, item)=>{
        return total += item.goods_count
      }, 0)
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
