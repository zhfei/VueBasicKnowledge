<template>
  <div>
    <van-cell>
      <!-- 标题 区域的插槽 -->
      <template #title>
        <div class="title-box">
          <span> {{ title }} </span>
          <img src="../../assets/phone0.jpg" alt="" srcset="" height="160" class="thumb">
        </div>
        <!-- 三张图片 -->
        <div class="thumb-box">
          <img src="../../assets/phone0.jpg" alt="" srcset="" height="160" class="thumb">
          <img src="../../assets/phone1.jpg" alt="" srcset="" height="160" class="thumb">
          <img src="../../assets/phone2.jpeg" alt="" srcset="" height="160" class="thumb">
        </div>
      </template>

      <!-- label 区域的插槽 -->
      <template #label>
        <div class="label-box">
          <span>作者: {{ name }} &nbsp;&nbsp; 评论: {{ commCount }} &nbsp;&nbsp; 发布日期: {{ time }}</span>
          <!-- 关闭按钮 -->
          <van-icon name="cross"/>
        </div>
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  name: 'ArticleInfo',
  props: {
    title: {
      type: String,
      default: ''
    },
    commCount: {
      // 1.可接收多种类型时，使用数组声明
      // 2.对于有2个单词组成的，第二个单词首字母要大写，而父组件传参属性推荐用comm-count设置
      type: [String, Number], 
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    time: {
      type: String,
      default: ''
    }
  },  
  data () {
    return {
      
    }
  },

  mounted () {
    
  },

  methods: {
    
  }
}
</script>

<style lang="less" scoped>
.label-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
// 宽高比-黄金比例：0.618
.thumb {
  width: 90px;
  height: 113px;
  background-color: #f8f8f8;
  object-fit: cover;
}

.title-box {
  display: flex;
  justify-content: space-between;
  align-items: center;

}

.thumb-box {
    display: flex;
    justify-content: space-between;
  }
</style>
