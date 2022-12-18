<template>
    <div class="footer-container">
        <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="cbFull" :checked="allSelectState" @change="selectAll">
            <label class="custom-control-label" for="cbFull">全选</label>
        </div>

        <div>
            <span>合计：</span>
            <span class="total-price">￥ {{allSelectPrice}}</span>
        </div>

        <div>
            <span>购买数({{allSelectCount}})</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GoodsCarFooter',
    props: {
        allSelectState: {
            type: Boolean,
            default: true
        },
        allSelectPrice: {
            type: Number,
            default: 0
        },
        allSelectCount: {
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
        selectAll(e) {
            this.$emit('selectAll', e.target.checked)
        }
    },
};
</script>

<style scoped>
.footer-container {
    height: 60px;
    width: auto;
    display: flex;
    flex-direction: row;
    position: fixed;
    bottom: 0;
    background-color: aquamarine;

}

</style>