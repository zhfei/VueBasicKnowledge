<template>
  <div id="app">
    <button @click="comName='Left'">Left</button>
    <button @click="comName='Right'">Right</button>
    <hr>

    <KeepAlive>
      <component :is="comName"></component>
    </KeepAlive>
    
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