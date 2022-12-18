<template>
  <div id="app">
    <Left></Left>
    <Right></Right>
    <component :is="comName"></component>
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