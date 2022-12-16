<template>
    <div class="container">
        <div class="thumb">
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="cb1" :checked="goods_state" @change="checkGoods">
                <label for="cb1" class="custom-control-label"></label>
                <img :src="goods_img" alt="商品名称" style="width: 100px;"></img>
            </div>
        </div>

        <div id="goods-info">
            <h5 class="goods-title">{{ goods_name }}</h5>
            <div id="goods-info-bottom">
                <span class="goods-price">￥{{ goods_price }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GoodsCarGoods',
    props: {
        id: {
            type: Number,
            required: true
        },
        goods_count: {
            type: Number,
            default: 0
        },
        goods_img: {
            default: '',
            type: String
        },
        goods_name: {
            default: '',
            type: String
        },
        goods_price: {
            default: 0,
            type: Number
        },
        goods_state: {
            default: true,
            type: Boolean
        }
    },

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        checkGoods(e) {
            console.log(this.id, e.target.checked);
            
            this.$emit('changeGoodsState', {id:this.id, goods_state:this.goods_state})
        }
        
    },
};
</script>

<style  scoped>
.container {
    flex-direction: row;
    display: flex;
}

</style>