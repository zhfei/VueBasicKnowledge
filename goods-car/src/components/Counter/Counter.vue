<template>
    <div class="container">
        <button>+</button>
        <span> {{count}} </span>
        <button>-</button>
    </div>
</template>

<script>
export default {
    name: 'GoodsCarCounter',
    props: {
        count: {
            type: Number,
            default: 0
        }
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

<style scoped>
.container {
    display: flex;
    flex-direction: row;
    height: 30px;
}

</style>