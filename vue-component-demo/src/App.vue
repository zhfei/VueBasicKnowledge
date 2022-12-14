<template>
  <div id="app">
    <h1>Hello Vue Component</h1>
    <h2>Child组件的计数为：{{supCount}}</h2>
    <button @click="resetZero">将计数重置为0</button>
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
      supCount: 0
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
    }
  }

};
</script>