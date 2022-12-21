<template>
    <div class="container">
        插槽Left组件
        <hr>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'VueAdvancedComponentDeomSlotLeft',

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
    background-color: green;
}
</style>