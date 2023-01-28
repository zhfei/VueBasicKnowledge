<template>
  <div class="home-container">
    <van-nav-bar title="黑马头条" fixed/>
    <Article v-for="item in list" 
             :key="item.id" 
             :comm-count="item.comm_count" 
             :title="item.title"
             :time="item.pubdate"
             :name="item.aut_name"></Article>
  </div>
</template>

<script>
// 按需导入API函数
import { articleAPI } from '@/api/articleAPI'
import Article from '@/components/Articles/Article.vue'

export default {
  name: 'ToutiaoDemoHome',
  components: {
    Article
  },

  data () {
    return {
      page: 1,
      limit: 10,
      list: []
    }
  },

  mounted () {

  },

  created () {
    this.initArticleList()
  },

  methods: {
    async initArticleList () {
      const { data: result } = await articleAPI(this.page, this.limit)
      this.list = [...result, ...this.list]
      console.log(result)
    }
  }            
}
</script>

<style lang="less" scoped>
.home-container {
  padding: 45px 0 50px 0;
  .van-nav-bar {
    background-color: #007bff;
  }

  /deep/ .van-nav-bar__title {
    color: white;
  }
}

</style>
