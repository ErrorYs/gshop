<template>
  <div class="topheader">
    <slot name="left"></slot>
    <h3 class="title ellipsis">{{title}} </h3>
    <slot name="right"></slot>
  </div>
</template>
<script>
export default {
  props: {
    title: String
  }
}
</script>
<style lang="scss" scoped>
@import "styles/variable.scss";
.topheader {
  height: 45px;
  background-color: $bgColor;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  .search {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #fff;
    // font-size: 40px;
    i {
      font-size: 20px;
    }
  }
  .title {
    position: absolute;
    left: 50%;
    font-size: 18px;
    max-width: 170px;
    transform: translate(-50%, -50%);
    top: 50%;
    color: #fff;
  }
  .login {
    color: #fff;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
