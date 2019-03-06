<template>
  <div class="order">
    <TopHeader :title="title" />
    <div class="login">
      <div class="login_img">
        <img
          src="./images/person.png"
          alt=""
          class="img_content"
        >
        <p class="desc">登陆后立即查看</p>
        <mt-button size="small">点击登陆</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
import TopHeader from 'components/Topheader/Topheader.vue'
export default {
  data () {
    return {
      title: '订单'
    }
  },
  components: {
    TopHeader
  }
}
</script>
<style lang="scss" scoped>
@import "styles/variable.scss";
.order {
  position: absolute;
  left: 0;
  right: 0;
  top: 45px;
  bottom: 49px;
  background-color: #eee;
  .login {
    padding-top: 140px;
    margin: 0 auto;
    width: 60%;
    text-align: center;
    .login_img {
      .img_content {
        width: 100%;
      }
    }
    .desc {
      text-align: center;
    }
    .mint-button--default {
      margin-top: 10px;
      background: $bgColor;
      color: #fff;
    }
  }
}
</style>
