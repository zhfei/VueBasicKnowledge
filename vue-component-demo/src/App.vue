<template>
  <div id="app">
    <h1>Hello Vue Component</h1>
    <!-- 3.使用组件 -->
    <Left/>
  </div>
</template>

<script>
// 1.导入组件
import Left from '@/components/Left.vue'

export default {
  components: {
    // 2.注册组件
    Left
  }
};
</script>