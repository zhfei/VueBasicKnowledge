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
        <p v-color="'blue'">私有自定义指令传参</p>
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
            // 当指令第一次被绑定到元素上面时，会执行bind函数， 其他都不再调用
            // binding是私有自定义指令的传参
            bind(el, binding) {
                console.log(el);
                el.style.color = 'red'

                console.log(binding);
                el.style.color = binding.value
            },
            // Dom每次更新的时候调用
            update(el, binding) {
                console.log(el);
                el.style.color = 'red'

                console.log(binding);
                el.style.color = binding.value
            }
        }

    }
};
</script>

<style lang="scss" scoped>

</style>