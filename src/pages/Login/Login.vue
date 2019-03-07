<template>
  <div class="login">
    <a
      @click="$router.back()"
      class="header"
    >
      <i class="iconfont">&#xe636;</i>
    </a>
    <div class="container">
      <h2 class="title">硅谷外卖</h2>
      <div class="login_title">
        <a
          href="#"
          :class="{on:showFrom}"
          @click="showFrom=true"
        >短信登陆</a>
        <a
          href="#"
          @click="showFrom=false"
          :class="{on:!showFrom}"
        >密码登陆</a>
      </div>
      <div class="login_content">
        <form
          action="#"
          @submit.prevent="login"
        >
          <div
            class="form_on"
            :class="{on:showFrom} "
          >
            <div class="tel">
              <cube-input
                v-model="phone"
                placeholder="手机号"
                type="tel"
                :maxlength="maxlength"
              ></cube-input>
              <button
                @click.prevent="get_telverification"
                class="get_verification"
                :disabled="!rightPhone"
                :class="{get_verificat:rightPhone} "
              >{{count>0? `还剩${count}秒`:'请输入验证码'}} </button>
            </div>
            <div class="verification">
              <cube-input
                v-model="code"
                placeholder="验证码"
                type="number"
              ></cube-input>
            </div>
            <div class="tip">
              温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="#">《用户服务协议》</a>
            </div>
          </div>
          <div
            class="form_on"
            :class="{on:!showFrom} "
          >
            <div class="tel">
              <cube-input
                v-model="name"
                placeholder="手机/邮箱/用户名"
                type="text"
              ></cube-input>
            </div>
            <div class="tel">
              <cube-input
                v-model="pwd"
                placeholder="密码"
                type="text"
                v-if="switch_button"
              ></cube-input>
              <cube-input
                v-model="pwd"
                placeholder="密码"
                type="password"
                v-else
              ></cube-input>
              <div
                class="switch_button"
                :class="{switch:switch_button}"
                @click="switch_btn"
              >
                {{switch_button?'abc':'...'}}
                <div class="switch_scoll"></div>
              </div>
            </div>
            <div class="tel">
              <cube-input
                v-model="captcha"
                placeholder="验证码"
                type="text"
              ></cube-input>
              <div class="verification_code">
                <img
                  src="http://localhost:4000/captcha"
                  alt=""
                  class="code_img"
                  @click="changeCaptcha"
                  ref="getCaptcha"
                >
              </div>
            </div>
          </div>
          <cube-button type="submit">登陆</cube-button>
          <div class="about_us">关于我们</div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { reqSendCode, reqLoginPwd, reqLoginSms } from '../../api/index.js'
// import { clearInterval } from 'timers'
// import { mapState } from 'vuex'
export default {
  data () {
    return {
      maxlength: 11,
      switch_button: false,
      showFrom: true, // true手机登陆 false密码登陆
      phone: '', // 手机号
      code: '', // 手机验证码
      name: '', // 用户名/邮箱/手机号
      pwd: '', // 用户密码
      captcha: '', // 验证码
      count: 0,
      tiptitle: '',
      rightPhones: true,
      timeId: null
    }
  },
  methods: {
    switch_btn () {
      if (!this.switch_button) {
        this.switch_button = true
      } else {
        this.switch_button = false
      }
    },
    showClose () {
      this.$createDialog({
        type: 'alert',
        icon: 'cubeic-alert',
        showClose: true,
        title: this.tiptitle,
        onClose: () => {
          this.$createToast({
            type: 'warn',
            time: 1000,
            txt: '点击关闭按钮'
          }).show()
        }
      }).show()
    },
    // 获取一次性验证码
    changeCaptcha () {
      this.$refs.getCaptcha.src = 'http://localhost:4000/captcha?time=' + Date.now()
    },
    // 获取手机验证码
    async get_telverification () {
      if (!this.count) {
        this.count = 30
        this.timeId = setInterval(() => {
          this.count--
          this.rightPhones = false
          // this.rightPhones = true
          if (this.count <= 0) {
            clearInterval(this.timeId)
            this.rightPhones = true
          }
        }, 1000)
        const result = await reqSendCode(this.phone)
        if (result.code === 1) {
          this.tiptitle = '验证码接受失败'
          this.showClose()
          if (this.count) {
            this.count = 0
            clearInterval(this.timeId)
            this.timeId = null
          }
        }
      }
    },
    // login登陆
    async login () {
      let result
      if (this.showFrom) { // 手机登陆
        const { phone, code } = this
        if (!phone) {
          // 请输入正确的手机号
          this.tiptitle = '请输入正确的手机号'
          this.showClose()
          return
        } else if (!/^\d{6}$/.test(code)) {
          // 请输入正确的验证码
          this.tiptitle = '请输入正确的验证码'
          this.showClose()
          return
        }
        result = await reqLoginSms(phone, code)
      } else { // 用户名登陆
        const { name, pwd, captcha } = this
        if (!name) {
          this.tiptitle = '请输入用户名'
          this.showClose()
          return
        } else if (!/^[0-9]*$/.test(pwd)) {
          this.tiptitle = '请正确输入密码'
          this.showClose()
          return
        } else if (!/^[0-9a-zA-Z]*$/.test(captcha)) {
          this.tiptitle = '请输入正确的验证码'
          this.showClose()
          return
        }
        result = await reqLoginPwd({ name, pwd, captcha })
      }
      // 登陆
      if (this.count) {
        this.count = 0
        clearInterval(this.timeId)
        this.timeId = null
      }
      if (result.code === 0) {
        const user = result.data
        this.$store.dispatch('getUserInfo', user)
        this.$router.replace('/profile')
      } else {
        this.tiptitle = result.msg
        this.showClose()
        this.changeCaptcha()
        this.captcha = ''
      }
    }
  },
  computed: {
    rightPhone () {
      return (/^1\d{10}$/.test(this.phone) && this.count === 0) && this.rightPhones
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
      .form_on {
        display: none;
      }
      .on {
        display: block;
      }
      .tel {
        position: relative;
        margin-bottom: 14px;
        .get_verification {
          overflow: hidden;
          position: absolute;
          border: none;
          background-color: #fff;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 14px;
          color: #ddd;
          &.get_verificat {
            color: #000;
          }
          &:focus {
            outline: none;
          }
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
      .switch_button {
        position: absolute;
        right: 5px;
        top: 50%;
        transform: translateY(-50%);
        width: 44px;
        height: 18px;
        text-align: right;
        border: 1px solid #ddd;
        border-radius: 9px;
        box-sizing: border-box;
        line-height: 16px;
        color: #ddd;
        font-size: 13px;
        transition: all 0.3s;
        &.switch {
          background-color: $bgColor;
          color: #fff;
          text-align: left;
          padding-left: 4px;
          .switch_scoll {
            transform: translateX(26px);
          }
        }
        .switch_scoll {
          transition: all 0.3s;
          box-sizing: border-box;
          position: absolute;
          top: -1px;
          left: -1px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          border: 1px solid #ddd;
          z-index: 99;
          background-color: #fff;
        }
      }
      .verification_code {
        position: absolute;
        right: 0;
        top: 50%;
        width: 150px;
        height: 40px;
        transform: translateY(-50%);
        .code_img {
          height: 100%;
        }
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
