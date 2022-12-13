<template>
    <div>
        <h2>引用组件</h2>
        <hr>
        <p ref="pRef">鹅鹅鹅，曲项向天歌</p>
        <button @click="changeColor">点击变色</button>
    </div>
</template>

<script>
export default {
    name: 'VueComponentDemoRef',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        changeColor() {
            console.log(this);
            this.$refs.pRef.style.color = 'red'
        }
    },
};
</script>

<style lang="scss" scoped>

</style>