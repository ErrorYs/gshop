<template>
  <div class="login">
    <a @click="$router.back()" class="header">
      <i class="iconfont">&#xe636;</i>
    </a>
    <div class="container">
      <h2 class="title">硅谷外卖</h2>
      <div class="login_title">
        <a
          href="#"
          class="on"
        >短信登陆</a>
        <a href="#">密码登陆</a>
      </div>
      <div class="login_content">
        <form action="#">
          <div class="tel">
            <cube-input
              v-model="value"
              placeholder="手机号"
              type="tel"
              :maxlength="maxlength"
            ></cube-input>
            <div class="get_verification">
              获取验证码
            </div>
          </div>
          <div class="verification">
            <cube-input
              v-model="value"
              placeholder="验证码"
              type="number"
            ></cube-input>
          </div>
          <div class="tip">
            温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
            <a href="#">《用户服务协议》</a>
          </div>
          <cube-button type="submit">登陆</cube-button>
          <div class="about_us">关于我们</div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value: '',
      maxlength: 11
    }
  }
}
</script>

<style lang="scss" scoped>
@import "styles/variable.scss";
.login {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  .header {
    position: absolute;
    top: 5px;
    left: 5px;
    color: #999;
  }
  .container {
    width: 80%;
    margin: 60px auto;
    .title {
      text-align: center;
      font-size: 40px;
      color: $bgColor;
      font-weight: bold;
      margin-bottom: 40px;
    }
    .login_title {
      text-align: center;
      margin-bottom: 10px;
      a {
        display: inline-block;
        height: 22px;
        font-size: 14px;
        &.on {
          border-bottom: 2px solid $bgColor;
        }
        &:first-child {
          margin-right: 40px;
        }
      }
    }
    .login_content {
      .tel {
        position: relative;
        margin-bottom: 14px;
        .get_verification {
          overflow: hidden;
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 12px;
          color: #eee;
        }
      }
      .verification {
        margin-bottom: 14px;
      }
      .tip {
        font-size: 14px;
        color: #999;
        margin-bottom: 30px;
        a {
          color: $bgColor;
        }
      }
      .cube-btn {
        padding: 14px 16px;
        background-color: #4cd96f;
        border-radius: 4px;
      }
      .about_us {
        color: #999;
        font-size: 14px;
        margin-top: 12px;
        text-align: center;
      }
    }
  }
}
</style>
