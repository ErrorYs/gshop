<template>
  <div class="shop">
    <div class="shop_header">
      <div
        class="shop_nav"
        :style="{backgroundImage:`url(${info.bgImg})`}"
      >
        <div
          class="back_home"
          @click="$router.push('/')"
        >
          <i class="iconfont">&#xe636;</i>
        </div>
      </div>
      <div class="shop_content">
        <div class="content_img">
          <img
            :src="info.avatar"
            alt=""
            class="img_content"
          >
        </div>
        <h3
          class="content_title"
          @click="showBrief =!showBrief"
        >
          <span class="tag">品牌</span>
          <span class="title ellipsis">{{info.name}} </span>
          <i class="iconfont">&#xe6a2;</i>
        </h3>
        <p class="content_message">
          <span class="shop_message_detail"> {{info.foodScore}} </span>
          <span class="shop_message_detail">月售{{info.sellCount}}单</span>
          <span class="shop_message_detail">{{info.description}}</span>
          <span class="shop_message_detail">约{{info.deliveryTime}}分钟</span>
          <span class="shop_message_detail">距离{{info.distance}}</span>
        </p>
      </div>
      <div
        class="shop_desc"
        @click="showSheet=!showSheet"
        v-if="info.supports"
      >
        <div class="desc_left">
          <span class="desc_tag">{{info.supports[0].name}} </span>
          <span class="desc_content ellipsis">{{info.supports[0].content}}</span>
        </div>
        <div class="desc_right">
          {{info.supports.length}}个优惠
        </div>
      </div>
    </div>
    <div class="shop_tab border-bottom-1px">
      <div class="tab_item">
        <router-link
          :to="`/shop/${$route.params.id}/shopgoods`"
          class="tab_item_a active"
        >点餐</router-link>
        <router-link
          :to="`/shop/${$route.params.id}/shoprating`"
          class="tab_item_a "
        >评价</router-link>
        <router-link
          :to="`/shop/${$route.params.id}/shopinfo`"
          class="tab_item_a "
        >商家</router-link>
      </div>
    </div>
    <router-view></router-view>
    <transition name="fade">
      <div
        class="brief_model"
        v-show="!showBrief"
      >
        <div class="brief_content">
          <div class="brief_title">
            <span class="title_tag">品牌</span>
            <span class="title_name">嘉禾一品（温都水城）</span>
          </div>
          <ul class="brief_msg">
            <li class="brief_meg_item">
              <h4>4.2</h4>
              <p>评分</p>
            </li>
            <li class="brief_meg_item">
              <h4>90单</h4>
              <p>月售</p>
            </li>
            <li class="brief_meg_item">
              <h4>硅谷专送</h4>
              <p>约28分钟</p>
            </li>
            <li class="brief_meg_item">
              <h4>4元</h4>
              <p>配送费用</p>
            </li>
            <li class="brief_meg_item">
              <h4>1000m</h4>
              <p>距离</p>
            </li>
          </ul>
          <div class="brief_notice_titel">
            <span>公告</span>
          </div>
          <div class="brief_notice">
            是以粥为特色的中式营养快餐，自2004年10月18日创立“嘉和一品”品牌至今，不断优化管理，积极创新，立足于“贴近百姓生活，服务千家万户”
          </div>
          <div
            class="brief_close"
            @click="showBrief = !showBrief"
          >
            <i class="iconfont">&#xe720;</i>
          </div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div
        class="active_sheet"
        v-show="!showSheet"
      >
        <div class="sheet_content">
          <div class="sheet_title">优惠活动</div>
          <ul class="sheet_list">
            <li
              class="list_item"
              v-for="(item, index) in info.supports"
              :key="index"
            >
              <span
                class="tag"
                :class="active_calss[item.type]"
              >{{item.name}}</span>
              <span class="content">{{item.content}}</span>
            </li>
          </ul>
          <div
            class="sheet_close"
            @click="showSheet = !showSheet"
          >
            <i class="iconfont">&#xe720;</i>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
// import axios from 'axios'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      showBrief: true,
      showSheet: true,
      active_calss: ['acitve_green', 'acitve_red', 'acitve_orange']
    }
  },
  computed: {
    ...mapState(['goods', 'info', 'ratings'])
  },
  methods: {
  },
  mounted () {
    this.$store.dispatch('getInfo')
    this.$store.dispatch('getGoods')
    this.$store.dispatch('getRatings')
  }
}
</script>
<style lang="scss" scoped>
@import "styles/variable.scss";
.shop {
  .shop_header {
    .shop_nav {
      width: 100%;
      height: 50px;
      background-size: cover;
      background-repeat: no-repeat;
      background-color: #ddd;
      .back_home {
        line-height: 50px;
        .iconfont {
          font-size: 30px;
          color: #fff;
        }
      }
    }
    .shop_content {
      position: relative;
      // overflow: hidden;
      padding: 33px 30px 5px 30px;
      text-align: center;
      .content_img {
        position: absolute;
        width: 66px;
        height: 66px;
        left: 50%;
        top: 0;
        transform: translate(-50%, -50%);
        .img_content {
          width: 100%;
        }
      }
      .content_title {
        line-height: 30px;
        .tag {
          font-size: 12px;
          background-color: #fff100;
          padding: 2px 4px;
        }
        .title {
          font-size: 20px;
          margin-left: 15px;
          max-width: 220px;
        }
      }
      .content_message {
        font-size: 11px;
        margin-top: 5px;
        text-align: center;
        .shop_message_detail {
          margin-right: 10px;
        }
      }
    }
    .shop_desc {
      font-size: 11px;
      text-align: center;
      overflow: hidden;
      width: 80%;
      margin: 0 auto;
      padding: 5px 7px;
      border: 1px solid #ddd;
      .desc_left {
        float: left;
        .desc_tag {
          font-size: 10px;
          background-color: #70bc46;
          color: #fff;
          margin-right: 2px;
        }
      }
      .desc_right {
        float: right;
        position: relative;
        padding-right: 10px;
        &::after {
          content: "";
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          display: block;
          border-width: 4px 4px 0;
          // border-color: #000;
          border-color: rgba(0, 0, 0, 0.57) transparent transparent;
          border-style: solid;
        }
      }
    }
  }
  .shop_tab {
    line-height: 40px;
    .tab_item {
      display: flex;
      justify-content: space-between;
      .tab_item_a {
        flex: 1;
        text-align: center;
        display: block;
        &.router-link-active {
          color: $bgColor;
        }
      }
    }
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  .brief_model {
    &.on {
      display: none;
    }
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    .brief_content {
      width: 80%;
      border-radius: 5px;
      background-color: #fff;
      padding: 20px 10px;
      box-sizing: border-box;
      position: relative;
      .brief_title {
        text-align: center;
        margin-bottom: 20px;
        .title_tag {
          font-size: 12px;
          padding: 2px 4px;
          margin-right: 5px;
          background-color: #ffe339;
        }
        .title_name {
          font-weight: bold;
        }
      }
      .brief_msg {
        display: flex;
        .brief_meg_item {
          flex: 1;
          text-align: center;
          h4 {
            font-weight: bold;
            color: #333;
            font-size: 14px;
            margin-bottom: 10px;
          }
          p {
            color: #ddd;
            font-size: 11px;
          }
        }
      }
      .brief_notice_titel {
        margin: 15px auto 15px;
        width: 85px;
        text-align: center;
        background-image: linear-gradient(90deg, #fff, #333 50%, #fff);
        background-size: 100% 1px;
        background-repeat: no-repeat;
        background-position: 50%;
        span {
          background: #fff;
          padding: 0 4px;
          font-size: 14px;
        }
      }
      .brief_notice {
        font-size: 14px;
      }
      .brief_close {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -40px;
        // background-color: #fff;
        border: 1px solid #fff;
        padding: 4px;
        border-radius: 50%;
        color: #fff;
        .iconfont {
          font-size: 20px;
        }
      }
    }
  }
  .active_sheet {
    &.off {
      display: none;
    }
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);
    .sheet_content {
      padding: 20px 20px;
      background-color: #fff;
      z-index: 5;
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      .sheet_title {
        font-size: 20px;
        text-align: center;
        font-weight: bold;
      }
      .sheet_list {
        height: 160px;
        overflow-y: auto;
        margin-top: 20px;
        .list_item {
          margin-bottom: 15px;
          .tag {
            font-size: 12px;
            margin: 10px;
            padding: 2px 4px;
            border-radius: 3px;
            &.acitve_green {
              background-color: green;
            }
            &.acitve_red {
              background-color: red;
            }
            &.acitve_orange {
              background-color: orange;
            }
          }
          .content {
            font-size: 14px;
          }
        }
      }
    }
    .sheet_close {
      position: absolute;
      right: 15px;
      top: 15px;
      .iconfont {
        font-size: 20px;
      }
    }
  }
}
</style>
