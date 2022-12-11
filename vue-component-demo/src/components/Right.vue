<template>
    <div id="right">
        Right 子组件
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
#right {
    background-color: brown;
}
</style>