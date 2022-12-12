<template>
    <div>
        当前计数：{{count}}
        <button @click="increat">+1</button>
    </div>
</template>

<script>
export default {
    name: 'VueComponentDemoChild',

    data() {
        return {
            count: 0
        };
    },
    methods: {
        increat() {
            this.count += 1
            this.$emit('numchanged', this.count)
        }
    },
};
</script>

<style lang="scss" scoped>

</style>