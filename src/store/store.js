import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    province: '',
    provinceNum: null,
    city: '',
    nearCity: [],
    loginStatus: false,
    userName: null
  },
  mutations: {
    changeProvince (state, newPro) {
      state.province = newPro
    },
    changeCity (state, newCity) {
      state.city = newCity
    },
    changeProNum (state, newNum) {
      state.provinceNum = newNum
    },
    changeNearCity (state, city) {
      state.nearCity = city
    },

    changeLoginStatus (state, bool) {
      state.loginStatus = bool
    },
    changeUserName (state, name) {
      state.userName = name
    }
  },
  actions: {
    changeProvince ({commit}, val) {
      commit('changeProvince', val)
    },
    changeCity ({commit}, val) {
      commit('changeCity', val)
    },
    changeLoginStatus ({commit}, val) {
      commit('changeLoginStatus', val)
    },
    changeUserName ({commit}, name) {
      commit('changeUserName', name)
    }
  }
})

export default store
