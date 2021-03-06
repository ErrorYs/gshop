// 通过mutation间接更新state的多个方法的对象
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO, RESET_USER_INFO
} from './mutations-type'
import {
  reqAddress,
  reqFoodcategorys,
  reqShops,
  reqUserinfo,
  reqLogout
} from '../api/index'
export default {
  async getAddress ({
    commit,
    state
  }) {
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {
        address
      })
    }
  },
  async getCategorys ({
    commit
  }) {
    const result = await reqFoodcategorys()
    if (result.code === 0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, {
        categorys
      })
    }
  },
  async getShops ({
    commit,
    state
  }) {
    const latitude = state.latitude
    const longitude = state.longitude
    const result = await reqShops(latitude, longitude)
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {
        shops
      })
    }
  },
  getUserInfo ({ commit }, userInfo) {
    commit(RECEIVE_USER_INFO, { userInfo })
  },
  async getSeccUserInfo ({ commit }) {
    const result = await reqUserinfo()
    if (result.code === 0) {
      const userInfo = result.data
      commit(RECEIVE_USER_INFO, { userInfo })
    }
  },
  async setLogout ({ commit }) {
    const result = await reqLogout()
    if (result.code === 0) {
      commit(RESET_USER_INFO)
    }
  }
}
