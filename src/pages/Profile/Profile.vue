<template>
  <div class="profile">
    <TopHeader :title="title" />
    <div class="login">
      <router-link
        to="/login"
        class="login_content"
      >
        <div class="profile_img">
          <span class="iconfont">&#xe652;</span>
        </div>
        <div class="user_info">
          <p class="user_login">登陆/注册</p>
          <p class="user_tel"><span class="iconfont">&#xe61a;</span>暂无绑定手机号</p>
        </div>
        <span class="iconfont arrow_r">&#xe630;</span>
      </router-link>
    </div>
    <div class="profile_info clearfix">
      <ul class="info_list">
        <li class="list_item border-right">
          <p><em class="remaining">0.00</em>元</p>
          <span>我的余额</span>
        </li>
        <li class="list_item border-right">
          <p><em class="discounts">0</em>个</p>
          <span>我的优惠</span>
        </li>
        <li class="list_item">
          <p><em class="integral">0</em>分</p>
          <span>我的积分</span>
        </li>
      </ul>
    </div>
    <ul class="server_list">
      <li class="server_list_item">
        <a href="#">
          <div class="list_ico">
            <span class="iconfont">&#xe626;</span>
          </div>
          <div class="server_list_right border-bottom">
            <p>我的订单</p>
            <span class="iconfont">&#xe630;</span>
          </div>
        </a>
      </li>
      <li class="server_list_item">
        <a href="#">
          <div class="list_ico">
            <span class="iconfont">&#xe61d;</span>
          </div>
          <div class="server_list_right border-bottom">
            <p>积分商城</p>
            <span class="iconfont">&#xe630;</span>
          </div>
        </a>
      </li>
      <li class="server_list_item">
        <a href="#">
          <div class="list_ico">
            <span class="iconfont">&#xe619;</span>
          </div>
          <div class="server_list_right border-bottom">
            <p>外卖会员卡</p>
            <span class="iconfont">&#xe630;</span>
          </div>
        </a>
      </li>
    </ul>
    <ul class="server_list">
      <li class="server_list_item">
        <a href="#">
          <div class="list_ico">
            <span class="iconfont">&#xe646;</span>
          </div>
          <div class="server_list_right border-bottom">
            <p>服务中心</p>
            <span class="iconfont">&#xe630;</span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import TopHeader from 'components/Topheader/Topheader.vue'
export default {
  data () {
    return {
      title: '我的'
    }
  },
  components: {
    TopHeader
  }
}
</script>
<style lang="scss" scoped>
@import "styles/variable.scss";
.profile {
  font-size: 12px;
  background-color: #eee;
  padding-top: 46px;
  .login {
    padding: 16px;
    background-color: $bgColor;
    height: 60px;
    .login_content {
      width: 100%;
      height: 60px;
      color: #fff;
      display: block;
      .profile_img {
        float: left;
        span {
          font-size: 60px;
        }
      }
      .user_info {
        float: left;
        margin-left: 10px;
        .user_login {
          line-height: 28px;
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 8px;
        }
      }
      .arrow_r {
        float: right;
        margin-top: 20px;
      }
    }
  }
  .profile_info {
    width: 100%;
    overflow: hidden;
    .info_list {
      .list_item {
        background-color: #fff;
        height: 80px;
        float: left;
        width: 33.33%;
        text-align: center;
        p {
          margin-top: 15px;
          em {
            font-size: 26px;
            font-style: normal;
            line-height: 40px;
          }
          .remaining {
            color: #f90;
          }
          .discounts {
            color: #ff5f3e;
          }
          .integral {
            color: #6ac20b;
          }
        }
      }
    }
  }
  .server_list {
    margin-top: 12px;
    background-color: #fff;
    overflow: hidden;
    .server_list_item {
      height: 50px;
      line-height: 50px;
      .list_ico {
        float: left;
        width: 35px;
        .iconfont {
          font-size: 24px;
          float: right;
          color: #02a774;
        }
      }
      .server_list_right {
        font-size: 16px;
        display: flex;
        justify-content: space-between;
        margin-right: 5px;
      }
    }
  }
}
</style>
