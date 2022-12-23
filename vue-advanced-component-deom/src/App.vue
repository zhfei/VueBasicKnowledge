<template>
  <div id="app">
    <button @click="comName='Left'">Left</button>
    <button @click="comName='Right'">Right</button>
    <hr>

    <KeepAlive include="Left,Right">
      <component :is="comName"></component>
    </KeepAlive>

    <SlotLeft>
      <!-- slot定义时有一个name属性，如果不设置默认叫default -->
      <!-- 在外部使用这个标签时，可以选择将插槽内容根据v-slot:name放到那个slot定义中 -->
      <!-- v-slot:name使用时，外面要使用template虚拟组件进行包裹，template虚拟组件并没有真实的内容 -->
      <template v-slot:second>
        <p>second插槽组件子内容</p>
      </template>

      <!-- v-slot:标志的简写是# -->
      <template #third>

      </template>

      <p>默认添加到默认插槽位置中</p>
      
    </SlotLeft>
  </div>
</template>

<script>
import Left from '@/components/Left/Left.vue'
import Right from '@/components/Right/Right.vue'
import SlotLeft from '@/components/SlotLeft/SlotLeft.vue'

export default {
  name: 'VueAdvancedComponentDeomApp',
  components: {
    Left,
    Right,
    SlotLeft
  },

  data() {
    return {
      comName: 'Left'
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style scoped>
  .app {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
</style>