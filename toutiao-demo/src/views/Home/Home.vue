<template>
  <div class="home-container">
    <van-nav-bar title="黑马头条" fixed/>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        {{ item.title }}
        <img v-for="(imageUrl, index) in item.cover.images" :key="index" :src="imageUrl" height="60"/>
      </li>
    </ul>
  </div>
</template>

<script>
import request from '@/utils/request'

export default {
  name: 'ToutiaoDemoHome',

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
      const { data: result } = await request.get('/articles', {
        params: {
          _page: this.page,
          _limit: this.limit
        }
      })
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
