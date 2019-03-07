<template>
  <div class="msite">
    <top-header :title="address.name">
      <div
        class="search"
        slot="left"
      >
        <i class="iconfont">&#xe819;</i>
      </div>
      <router-link
        href="#"
        class="login"
        slot="right"
        :to="userInfo._id?'/userinfo':'/login'"
      >
      <span v-if="!userInfo._id">登陆|注册</span>
      <i v-else class="iconfont">&#xe652;</i>
      </router-link>
    </top-header>
    <MisteCategory :arrCategorys="arrCategorys" />
    <MsiteShop />
  </div>
</template>
<script>
import TopHeader from 'components/Topheader/Topheader.vue'
import MisteCategory from './components/Category'
import MsiteShop from './components/Shop'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      // title: '昌平区北七家宏福科技园(337省道北)'
    }
  },
  computed: {
    ...mapState(['address', 'categorys', 'userInfo']),
    arrCategorys () {
      const { categorys } = this
      const arrCategorys = []
      categorys.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!arrCategorys[page]) {
          arrCategorys[page] = []
        }
        arrCategorys[page].push(item)
      })
      return arrCategorys
    }
  },
  mounted () {
    this.$store.dispatch('getCategorys')
    this.$store.dispatch('getShops')
  },
  components: {
    TopHeader,
    MisteCategory,
    MsiteShop
  }
}
</script>
<style lang="scss" scoped>
.msite {
  padding-top: 45px;
  background-color: #eee;
}
</style>
