<template>
  <div>
    <!-- vue实例中的$route属性是内置属性，它是vue的传参 -->
    电影 - {{ this.$route.params }} - {{ mid }}
  </div>
</template>

<script>
export default {
  name: 'RouterDemoMovie',
  props: ['mid'],
  created () {
    console.log(this)
  },

  data () {
    return {

    }
  },

  mounted () {

  },

  methods: {

  }
}
</script>

<style lang="scss" scoped>

</style>
