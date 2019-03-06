import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './common/styles/index.scss'
import './lib/rem'
import 'swiper/dist/css/swiper.css'
import 'mint-ui/lib/style.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { Button } from 'mint-ui'

Vue.component(Button.name, Button)

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
