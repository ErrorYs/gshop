<template>
  <cube-tab-bar
    class="border-top-1px"
    v-model="selectedLabelDefault"
    :data="tabs"
    @click="clickHandler"
  >
  </cube-tab-bar>
</template>
<script>
export default {
  data () {
    return {
      selectedLabelDefault: '/msite',
      tabs: [{
        label: '外卖',
        icon: 'iconfont iconwaimai',
        value: '/msite'
      }, {
        label: '搜索',
        icon: 'iconfont iconcustom-search',
        value: '/search'
      }, {
        label: '订单',
        icon: 'iconfont icondingdan',
        value: '/order'
      }, {
        label: '我的',
        icon: 'iconfont iconsolid-person',
        value: '/profile'
      }]
    }
  },
  methods: {
    clickHandler (value) {
      // console.log(value)
      this.$router.replace(value)
    }
  }
}
</script>
<style lang="scss" >
.cube-tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: #fff;
  div {
    font-size: 14px;
    margin-top: 5px;
  }
}
</style>
