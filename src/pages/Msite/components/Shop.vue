<template>
  <div class="shop">
    <div class="title">
      <i class="iconfont">&#xe616;</i>
      附近商家
    </div>
    <ul
      v-if="shops"
      class="item_list"
    >
      <li
        class="item"
        v-for="(item, index) in shops"
        :key="index"
      >
        <div class="item_img">
          <img
            :src="baseImgUrl+item.image_path"
            alt=""
            class="img_content"
          >
        </div>
        <div class="item_info">
          <div class="item_head">
            <h4 class="shop_title ellipsis">{{item.address}}</h4>
            <ol class="detail">
              <li
                class="supprot"
                v-for="(value, index) in item.supports"
                :key="index"
              >{{value.icon_name}}</li>
            </ol>
          </div>
          <div class="item_center">
              <Star :rating="item.rating" :size="size"/>
            <span class="grade">{{item.rating}}</span>
            <span class="cell_num">月售{{item.recent_order_num}}单</span>
            <div class="mark">硅谷专送</div>
          </div>
          <div class="item_bottom">
            ¥{{item.float_minimum_order_amount}}起送/配送费约¥{{item.float_delivery_fee}}
          </div>
        </div>
      </li>
    </ul>
    <ul v-else>
      <li
        v-for="count in 6"
        :key="count"
      >
        <img
          src="../images/shop_back.svg"
          alt="111"
        >
      </li>
    </ul>
  </div>

</template>
<script>
import { mapState } from 'vuex'
import Star from '../../../components/star/Star'
export default {
  data () {
    return {
      baseImgUrl: 'http://elm.cangdu.org/img/',
      size: 24
    }
  },
  computed: {
    ...mapState(['shops'])
  },
  components: {
    Star
  }
}
</script>
<style lang="scss" scoped>
.shop {
  background-color: #fff;
  margin-top: 10px;
  .title {
    height: 30px;
    padding: 10px;
    font-size: 14px;
    color: #999;
  }
  .item_list {
    .item {
      padding: 0 10px;
      display: flex;
      justify-content: space-between;
      .item_img {
        width: 80px;
        height: 80px;
        padding: 10px;
        box-sizing: border-box;
        .img_content {
          width: 100%;
        }
      }
      .item_info {
        margin-left: 10px;
        flex: 1;
        .item_head {
          overflow: hidden;
          height: 24px;
          .shop_title {
            font-weight: bold;
            line-height: 24px;
            &::before {
              content: "品牌";
              display: inline-block;
              background-color: #ffd930;
              font-size: 10px;
              line-height: 16px;
              margin-right: 5px;
            }
            float: left;
            max-width: 140px;
          }
          .detail {
            float: right;
            .supprot {
              margin: 0 2px;
              float: right;
              font-size: 8px;
              width: 16px;
              height: 18px;
              line-height: 18px;
              text-align: center;
              box-sizing: border-box;
              border: 1px solid #ccc;
              color: #ccc;
            }
          }
        }
        .item_center {
          overflow: hidden;
          margin-top: 15px;
          .grade {
            float: left;
            font-size: 10px;
            margin-left: 5px;
            color: #ff6000;
          }
          .cell_num {
            margin-left: 5px;
            float: left;
            font-size: 10px;
            color: #666;
          }
          .mark {
            float: right;
            font-size: 5px;
            color: #02a774;
            padding: 1px;
            border: 1px solid #02a774;
            box-sizing: border-box;
          }
        }
        .item_bottom {
          margin-top: 10px;
          font-size: 10px;
        }
      }
    }
  }
}
</style>
