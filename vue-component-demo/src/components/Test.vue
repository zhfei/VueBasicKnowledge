<template>
    <div>
        <p>hello vue.js</p>
        <p>查询到的图书有：{{ list.length }}</p>
    </div>
</template>

<script>

export default {

    data() {
        return {
            list: []
        };
    },

    methods: {
        getBookList() {
            var xml = new XMLHttpRequest()
            xml.addEventListener('load',function() {
                const res = JSON.parse(xml.responseText)
                console.log(this.list);
                this.list = res.data
                console.log(this.list);
            })
            xml.open('GET', 'http://www.liulongbin.top:3006/api/getbooks')
            xml.send()
        }
    },

    // 组件实例创建成功
    created() {
        
        console.log('组件创建完成');
        this.getBookList()
    },
    mounted() {
        console.log('组件挂载完成');
        console.log(this);
    },
    updated() {
        console.log('组件更新了');
        console.log(this);
    },
    destroyed() {
        console.log('组件销毁了');
        console.log(this);
    }

};
</script>

<style lang="less" scoped>

</style>