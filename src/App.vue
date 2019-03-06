<template>
  <div id="app">
    <router-view />
    <FooterGuide v-show="$route.meta.showFoot" />
  </div>
</template>
<script>
// import TopHeader from '../src/components/Topheader/Topheader'
import FooterGuide from '../src/components/FooterGuide/FooterGuide'
import { mapActions } from 'vuex'
export default {
  name: 'app',
  components: {
    FooterGuide
  },
  methods: {
    ...mapActions(['getAddress'])
  },
  mounted () {
    this.getAddress()
  }

}
</script>

<style lang="scss">
#app {
  font-size: 16px;
}
</style>
