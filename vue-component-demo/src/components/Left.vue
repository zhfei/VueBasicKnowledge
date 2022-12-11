<template>
    <div id="left">
        Left - 组件
        <Counter></Counter>
    </div>
</template>

<script>
import Counter from '@/components/Counter.vue'

export default {
    components: {
        Counter
    },
    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="less" scoped>
#left {
    background-color: blue;
}
</style>


