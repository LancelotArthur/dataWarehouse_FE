import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    userName: ''
  },
  mutations: {
    login (state, payload) {
      state.token = payload.token
      state.userName = payload.userName
    },
    logout (state) {
      state.token = ''
      state.userName = ''
    }
  }
})
