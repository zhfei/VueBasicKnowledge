<template>
    <div class="container">
        <div class="thumb">
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="cb1" :checked="true">
                <label for="cb1" class="custom-control-label"></label>
                <img :src="goods_img" alt="商品名称" style="width: 100px;"></img>
            </div>
        </div>

        <div id="goods-info">
            <h5 class="goods-title">{{ goods_name }}</h5>
            <div id="goods-info-bottom">
                <span class="goods-price">￥0</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GoodsCarGoods',
    props:['goods_count', 'goods_img', 'goods_name', 'goods_price', 'goods_state'],

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

<style  scoped>
.container {
    flex-direction: row;
    display: flex;
}

</style>