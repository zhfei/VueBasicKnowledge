<template>
  <div id="app">
    <h1>Hello Vue Component</h1>
    <!-- 3.使用组件 -->
    <Left/>
    <Counter/>
  </div>
</template>

<script>
// 1.导入组件
import Left from '@/components/Left.vue'
import Counter from '@/components/Counter.vue'

export default {
  components: {
    // 2.注册组件
    Left,
    Counter
  }
};
</script>