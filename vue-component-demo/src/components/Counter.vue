<template>
    <div id="counter">
        Counter - 子组件
        <p>当前计数为：{{ customInitCount }}</p>
        <button @click=" customInitCount += 1 ">加+1</button>
    </div>
</template>

<script>

export default {
    // 组件的自定义属性，简单的方式
    // 可以在外面使用时，可以自定义设置，传输
    // props是一个数组
    // props: ['customInitValue'],

    // 如果要对自定义属性设置默认值，那么就需要用下面这种对象的方式进行定义
    props: {
        customInitValue: {
            // 设置自定义属性的默认值
            default: 0,
            // 设置自定义属性的类型
            type: Number,
            // 这个属性是必填项，自定义组件要传这个值
            required: true
        }
    },

    data() {
        return {
            count: 0,
            // 自定义属性是只读的，如果需要对自定义属性的值做修改，可以把它设置到data属性中
            customInitCount: this.customInitValue
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="less">
#counter {
    background-color: beige;
}
</style>