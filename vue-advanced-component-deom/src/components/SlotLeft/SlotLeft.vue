<template>
    <div class="container">
        插槽Left组件
        <hr>
        <!-- 没有设置name的插槽叫默认插槽， 在组件中没有指定v-slot:name的插槽内容默认会放置到默认插槽中 -->
        <slot>
            
        </slot>
        <hr>
        <!-- 设置了name的插槽叫做具名插槽 -->
        <slot name="second">
            <h6>插槽后备内容second：当外部没有给这个插槽设置值时，会展示默认展示这块</h6>
        </slot>
        <slot name="third">
            <h6>插槽后备内容third：当外部没有给这个插槽设置值时，会展示默认展示这块</h6>
        </slot>
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