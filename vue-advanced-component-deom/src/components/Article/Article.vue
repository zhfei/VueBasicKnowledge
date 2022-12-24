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
        
        <p v-color>文章描述</p>
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
    // 私有自定义指令
    directives: {
        color: {
            // 当指令第一次被绑定到元素上面时，会执行bind函数
            bind(el) {
                console.log(el);
                el.style.color = 'red'
            }
        }

    }
};
</script>

<style lang="scss" scoped>

</style>