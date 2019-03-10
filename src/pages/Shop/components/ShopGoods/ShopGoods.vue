<template>
  <div class="shopgoods">
    <div class="goods_menu">
      <ul class="menu_list">
        <!-- active -->
        <li
          class="menu_item"
          v-for="(item, index) in goods"
          :key="index"
        >
          <span class="text border-bottom-1px">
            <img
              v-if="item.icon"
              :src="item.icon"
              alt=""
              class="menu_item_img"
            >
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="goods_list">
      <ul class="goods_title">
        <li
          class="title_list"
          v-for="(foods, index) in goods"
          :key="index"
        >
          <h3 class="tiele_list_title">{{foods.name}}</h3>
          <ul class="foods_list">
            <li
              class="foods_item border-bottom-1px"
              v-for="(food, index) in foods.foods"
              :key="index"
            >
              <div class="icon">
                <img
                  :src="food.icon"
                  alt=""
                  class="icon_img"
                >
              </div>
              <div class="foods_content">
                <h4 class="title">{{food.name}}</h4>
                <p class="desc">{{food.description}}</p>
                <p class="extra"><span>月售{{food.sellCount}}份</span><span>好评率{{food.rating}}%</span></p>
                <div class="price">
                  <span class="now">￥{{food.price}}</span>
                  <span
                    class="old"
                    v-if="food.oldPrice"
                  >￥{{food.oldPrice}}</span>
                </div>
              </div>
              <div class="cart_control_wrapper">jia</div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import BScorll from 'better-scroll'
export default {
  computed: {
    ...mapState(['goods'])
  },
  watch: {
    goods: function (value) {
      this.menuScroll = new BScorll('.goods_menu')
      this.foodScroll = new BScorll('.goods_list', {
        // probeType = 1,
        // click = true
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.shopgoods {
  // height: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 201px;
  left: 0;
  right: 0;
  bottom: 40px;
  .goods_menu {
    width: 20%;
    overflow: hidden;
    background-color: #f3f5f7;
    .menu_list {
      .menu_item {
        &.active {
          background-color: #fff;
        }
        padding: 0 10px;
        height: 54px;
        text-align: center;
        display: table;
        width: 54px;
        .text {
          display: table-cell;
          vertical-align: middle;
          font-size: 12px;
          &::after {
            border-color: #ddd;
          }
          .menu_item_img {
            width: 12px;
            height: 12px;
          }
        }
      }
    }
  }
  .goods_list {
    width: 80%;
    overflow: hidden;
    .goods_title {
      font-size: 14px;
      .title_list {
        .tiele_list_title {
          line-height: 26px;
          padding-left: 10px;
          background-color: #f3f5f7;
        }
        .foods_list {
          padding: 10px;
          .foods_item {
            position: relative;
            display: flex;
            margin-bottom: 20px;
            .icon {
              width: 57px;
              height: 57px;
              margin-right: 10px;
              .icon_img {
                width: 100%;
              }
            }
            .foods_content {
              flex: 1;
              .title {
                line-height: 20px;
              }
              .desc {
                font-size: 11px;
                color: #ddd;
                line-height: 18px;
              }
              .extra {
                font-size: 11px;
                color: #ddd;
                line-height: 18px;
              }
              .price {
                font-size: 16px;
                line-height: 20px;
                margin-bottom: 20px;
                .now {
                  color: red;
                  margin-right: 10px;
                }
                .old {
                  font-size: 12px;
                  color: #93999f;
                  text-decoration: line-through;
                }
              }
            }
            .cart_control_wrapper {
              position: absolute;
              right: 0;
              top: 0;
            }
          }
        }
      }
    }
  }
}
</style>
