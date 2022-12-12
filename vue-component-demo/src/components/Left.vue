<template>
    <div id="left">
        Left - 组件
        <Counter v-bind:customInitValue="3"></Counter>
        <button @click="sendMsg">发送好诗给Right组件</button>
    </div>
</template>

<script>
import Counter from '@/components/Counter.vue'
import bus from '../event/EventBus'
export default {
    components: {
        Counter
    },
    data() {
        return {
            message: '黑云压城城欲摧, 甲光向日金鳞开'
        };
    },

    mounted() {
        
    },

    methods: {
        sendMsg() {
            bus.$emit('sendMsg', this.message)
        }
    },
};
</script>

<style lang="less" scoped>
#left {
    background-color: peachpuff;
}
</style>


