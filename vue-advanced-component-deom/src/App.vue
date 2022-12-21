<template>
  <div id="app">
    <button @click="comName='Left'">Left</button>
    <button @click="comName='Right'">Right</button>
    <hr>

    <KeepAlive include="Left,Right">
      <component :is="comName"></component>
    </KeepAlive>

    <SlotLeft>
      <p>插槽组件子内容</p>
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