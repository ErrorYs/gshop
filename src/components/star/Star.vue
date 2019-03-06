<template>
  <div
    class="star"
    :class="'star_'+size"
  >
    <span class="star_item" v-for="(item, index) in stars" :key="index" :class="item"></span>
  </div>
</template>
<script>
const CALSS_ON = 'on'
const CLASS_HALF = 'half'
const CLASS_OFF = 'off'
export default {
  props: {
    rating: Number,
    size: Number
  },
  computed: {
    stars () {
      const stars = []
      const onNum = Math.floor(this.rating)
      for (let i = 0; i < onNum; i++) {
        stars.push(CALSS_ON)
      }
      if (this.rating * 10 - onNum * 10 > 5) {
        stars.push(CLASS_HALF)
      }
      while (stars.length < 5) {
        stars.push(CLASS_OFF)
      }
      return stars
    }
  }
}
</script>
<style lang="scss" scoped>
@import "styles/mixins.scss";
.star {
  float: left;
  &.star_24 {
    .star_item {
      float: left;
      width: 10px;
      height: 10px;
      background-size: 10px 10px;
      &.on {
        @include bg-image("./images/star24_on");
      }
      &.half {
        @include bg-image("./images/star24_half");
      }
      &.off {
        @include bg-image("./images/star24_off");
      }
    }
  }
  &.star_36 {
    .star_item {
      float: left;
      width: 15px;
      height: 15px;
      background-size: 15px 15px;
      &.on {
        @include bg-image("./images/star36_on");
      }
      &.half {
        @include bg-image("./images/star36_half");
      }
      &.off {
        @include bg-image("./images/star36_off");
      }
    }
  }
  &.star_48 {
    .star_item {
      float: left;
      width: 20px;
      height: 20px;
      background-size: 20px 20px;
      &.on {
        @include bg-image("./images/star48_on");
      }
      &.half {
        @include bg-image("./images/star48_half");
      }
      &.off {
        @include bg-image("./images/star48_off");
      }
    }
  }
}
</style>
