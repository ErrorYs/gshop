import Vue from 'vue'
import Router from 'vue-router'
import Msite from './pages/Msite/Msite.vue'
import Order from './pages/Order/ORder.vue'
import Profile from './pages/Profile/Profile.vue'
import Search from './pages/Search/Search.vue'
import Login from './pages/Login/Login.vue'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/msite'
  },
  {
    path: '/msite',
    component: Msite,
    meta: {
      showFoot: true
    }
  },
  {
    path: '/order',
    component: Order,
    meta: {
      showFoot: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      showFoot: true
    }
  },
  {
    path: '/search',
    component: Search,
    meta: {
      showFoot: true
    }
  }, {
    path: '/login',
    component: Login
  }
  ]
})
