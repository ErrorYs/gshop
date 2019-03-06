<template>
  <div>
    <div
      class="container"
      v-if="arrCategorys"
    >
      <swiper
        :options="swiperOption"
        :not-next-tick="notNextTick"
        ref="mySwiper"
      >
        <!-- slides -->
        <swiper-slide
          v-for="(items, index) in arrCategorys"
          :key="index"
        >
          <a
            href="#"
            class="item"
            v-for="(item, index) in items"
            :key="index"
          >
            <div class="item-img">
              <img
                class="img-content"
                :src="baseImgUrl+item.image_url"
                alt=""
              >
            </div>
            <span class="desc">{{item.title}} </span>
          </a>
        </swiper-slide>
        <!-- Optional controls -->
        <div
          class="swiper-pagination"
          slot="pagination"
        ></div>
      </swiper>
    </div>
  <img src="../images/msite_back.svg" alt="back" v-else>
  </div>
</template>
<script>
export default {
  data () {
    return {
      baseImgUrl: 'https://fuss10.elemecdn.com',
      notNextTick: true,
      swiperOption: {
        // swiper options 所有的配置同swiper官方api配置
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets'
        }
      }
    }
  },
  props: {
    arrCategorys: Array
  }
}
</script>
<style lang="scss" scoped>
.container {
  background-color: #fff;
  .item {
    display: inline-block;
    width: 25%;
    // float: left;
    font-size: 0;
    text-align: center;
    .item-img {
      // width: 100%;
      padding: 10px;
      .img-content {
        width: 50px;
        height: 50px;
        display: inline-block;
      }
    }
    .desc {
      font-size: 12px;
    }
  }
  .swiper-container {
    padding-bottom: 30px;
  }
  .swiper-pagination-bullets {
    bottom: 10px;
  }
}
</style>
