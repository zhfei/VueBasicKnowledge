<template>
    <div class="container">
        Left
        <button @click=" count += 1">加1</button>
        {{ count }}
    </div>
</template>

<script>
export default {
    name: 'VueAdvancedComponentDeomLeft',

    data() {
        return {
            count: 0
        };
    },

    mounted() {
        
    },

    methods: {
        
    },

    created() {
        console.log('被创建',this);
    },

    destroyed() {
        console.log('被销毁',this);
    },

    deactivated() {
        console.log('被缓存，进入后台',this);
    },
    activated() {
        console.log('被激活，进入前台',this);
    }
};
</script>

<style scoped>
.container {
    background-color: dodgerblue;
    width: 100%;
    height: 200px;
    float: left;
}

</style>