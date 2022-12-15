<template>
  <div id="app">
    <h1>Hello Vue Component</h1>
    <h2>Child组件的计数为：{{supCount}}</h2>
    <button @click="resetZero">将计数重置为0</button>
    <hr>
    <input v-if="visibelInput" @blur="hideInput" ref="iptRef" type="text">
    <button v-else @click="showInput" >请输入文字</button>
    <hr>
    <!-- 3.使用组件 -->
    <Child ref="child" @numchanged="handleChildChange"></Child>
    <Left/>
    <MyLeft></MyLeft>
    <MyRight></MyRight>
    <Test></Test>
    <Ref></Ref>
  </div>
</template>

<script>
// 1.导入组件
import Left from '@/components/Left.vue'
import Test from '@/components/Test.vue'
import Child from '@/components/Child.vue'
import Ref from '@/components/Ref.vue'

export default {

  data() {
    return {
      supCount: 0,
      visibelInput: false,
    }
  },
  components: {
    // 2.注册组件
    Left,
    Test,
    Child,
    Ref
  },

  methods: {
    handleChildChange(val) {
      console.log(val);
      this.supCount = val
    },
    resetZero() {
      console.log(this);
      this.$refs.child.count = 0
    },
    showInput() {
      this.visibelInput = true
      this.$nextTick(()=>{
        this.$refs.iptRef.focus()
      })
    },
    hideInput() {
      this.visibelInput = false

      var list = ['tom', 'lilei', 'hanmei', 'poli']
      //1
      list.forEach((item, index) => {
        console.log(index);
        if (index === 2) {
          return true
        }
      })
      console.log('-----------------');
      //2.
      list.some((item, index) => {
        console.log(index);
        if (index === 1) {
          return true
        }
      })

      const res = list.every(item => item.length > 3)

      var totalLength = 0;
      //3.
      list.filter(item => item.length > 5).forEach((item) => {
        totalLength += item.length * 10
      })

      //4.
      // list.filter(item => item.length > 5).reduce((上一次循环的结果和, 当前item) => {}, 初始化值)
      const resCount = list.filter(item => item.length > 5).reduce((totalLength, item) => {
        return totalLength += item.length * 10
      }, 0)
      console.log(resCount);
    }
  }

};
</script>