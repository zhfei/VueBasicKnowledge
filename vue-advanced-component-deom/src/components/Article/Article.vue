<template>
    <div class="article-container">
     
        <slot name="header">
            文章的头部
        </slot>

        <hr>

        <slot name="body" msg="hello vue.js" :user="userInfo">
            文章的内容
        </slot>

        <hr>

        <slot name="footer">
            文章的尾部
        </slot>
        
    </div>
</template>

<script>
export default {
    name: 'VueAdvancedComponentDeomArticle',

    data() {
        return {
            userInfo: {
                name: 'Jack',
                age: 30
            }
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>