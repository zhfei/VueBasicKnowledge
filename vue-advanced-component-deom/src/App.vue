<template>
  <div id="app">
    <button @click="comName='Left'">Left</button>
    <button @click="comName='Right'">Right</button>
    <hr>

    <!-- <KeepAlive include="Left,Right">
      
    </KeepAlive> -->

    <keep-alive include="Left">
      <component :is="comName"></component>
    </keep-alive>

  </div>
</template>

<script>
import Left from '@/components/Left/Left.vue'
import Right from '@/components/Right/Right.vue'

export default {
  name: 'VueAdvancedComponentDeomApp',
  components: {
    Left,
    Right
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