<template>
    <!-- template模板是组件的结构，下面的style和script都是模板的修饰 -->
    <div id="app">
        自定义组件 --- {{ username }}
        <button @click="changeName">修改名字</button>
    </div>
</template>

<script>

export default {
    // 组件中的data定义和vue实例对象中data的定义不一样
    // 组件中的data定义是一个函数，在函数的return里返回一个对象
    data: function (params) {
        return {
            username: 'Lilei'
        }
    },

    // 除了data需要使用函数，其他定义都和Vue实例的传参一样。
    methods: {
        changeName () {
            this.username = '娃哈哈'
        }
    },
    watch: {},
    filters: {},
    computed: {}
}
</script>

<!-- 修改css的预处理器使用lang来设置 -->
<style lang="less">
.app {
    background-color: antiquewhite;
    button {
        font-size: 20;
    }
}

</style>