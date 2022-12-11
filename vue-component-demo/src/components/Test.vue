<template>
    <div>
        <p>hello vue.js</p>
    </div>
</template>

<script>
import { url } from 'inspector';

export default {

    data() {
        return {
            list:[]
        };
    },

    methods: {
        getBookList() {
            var xml = new XMLHttpRequest()
            xml.addEventListener('load',function(res) {
                console.log(res);
            })
            xml.open('GET', 'http://www.liulongbin.top:3006/api/getbooks')
            xml.send()
        }
    },

    created () {
        this.getBookList()
    },
};
</script>

<style lang="scss" scoped>

</style>