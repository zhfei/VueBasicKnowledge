<template>
    <div class="container">
        <button @click="addOne">+</button>
        <span> {{count}} </span>
        <button @click="subOne">-</button>
    </div>
</template>

<script>
import bus from '@/tools/EventBus'

export default {
    name: 'GoodsCarCounter',
    props: {
        count: {
            type: Number,
            default: 0
        },
        id: {
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
        addOne() {
            bus.$emit('changeOneCount', {count:this.count+1, id:this.id})
        },
        subOne() {
            bus.$emit('changeOneCount', {count:this.count-1, id:this.id})
        }
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