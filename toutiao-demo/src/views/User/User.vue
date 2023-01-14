<template>
  <div class="user-container">
    <div class="user-card">
      <!-- 用户头像，姓名 -->
      <van-cell>
        <template #icon>
          <img src="../../assets/logo.png" alt="" srcset="" width="50">
        </template>

        <template #title>
          <span class="username">用户名</span>
        </template>

        <template #label>
          <van-tag color="#fff" text-color="#007bff">申请认证</van-tag>
        </template>
      </van-cell>

          <!-- 动态，关注，粉丝 -->
        <div class="user-data">
          <div class="user-data-item">
            <span>0</span>
            <span>动态</span>
          </div>
          <div class="user-data-item">
            <span>0</span>
            <span>关注</span>
          </div>
          <div class="user-data-item">
            <span>0</span>
            <span>粉丝</span>
          </div>
        </div>
    </div>

    <van-cell-group class="action-card">
      <van-cell icon="edit" title="编辑资料"></van-cell>
      <van-cell icon="chat-o" title="小思同学"></van-cell>
      <van-cell icon="warning-o" title="退出登录"></van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'ToutiaoDemoUser',

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
.user-container {
  .user-card {
    background-color: #007bff;
    color: white;
    padding-top: 20px;
    .van-cell {
      background-color: #007bff;
      color: white;
      &::after {
        display: none;
      }
      .avatar {
        width: 60px;
        height: 60px;
        background-color: #fff;
        border-radius: 50%;
        margin-right: 10px;
      }
      .username {
        font-size: 14px;
        font-weight: bold;
      }
    }

    .user-data {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      font-size: 14px;
      padding: 30px 0;
      .user-data-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 33.33%;
      }
    }
  }

}

</style>
