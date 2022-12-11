<template>
    <div id="right">
        Right 子组件
        <Counter :customInitValue="3"></Counter>
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

    // 使用场景：项目UI中使用了第三方库的UI组件，开发中要自定义修改第三方库组件的样式，又不能直接拿第三库的源码修改，可以通过/deep/深层修改
    // 使用/deep/ p修饰的样式 编译器最终会转成[data-v-001] p{}父子选择器的形式
    /deep/ p {
        background-color: pink;
    }
}

</style>