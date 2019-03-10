import Vue from 'vue'
import Router from 'vue-router'
import Msite from './pages/Msite/Msite.vue'
import Order from './pages/Order/ORder.vue'
import Profile from './pages/Profile/Profile.vue'
import Search from './pages/Search/Search.vue'
import Login from './pages/Login/Login.vue'
import Shop from './pages/Shop/Shop.vue'
import ShopGoods from './pages/Shop/components/ShopGoods/ShopGoods.vue'
import ShopRating from './pages/Shop/components/ShopRating/ShopRating.vue'
import ShopInfo from './pages/Shop/components/ShopInfo/Shopinfo.vue'
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
  },
  {
    path: '/shop/:id',
    component: Shop,
    children: [{
      path: 'shopgoods',
      component: ShopGoods
    },
    {
      path: 'shoprating',
      component: ShopRating
    },
    {
      path: 'shopinfo',
      component: ShopInfo
    },
    {
      path: '',
      redirect: 'shopgoods'
    }
    ]
  }
  ]
})
