import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    privateKey: 'ceshimoreng',
    isLogin: false, // 先改成true用来查看页面
    userType: 'user', // user,musician,company,judge
    user: null,
    name: '',
    phone: '',
    balance: ''
  },
  mutations: {
    initSetState(state, payload) {
      state.privateKey = payload.privateKey
      state.isLogin = payload.isLogin
      state.userType = payload.userType
      // state.user = localStorage.getItem('user')
      localStorage.setItem('privateKey', payload.privateKey)
      localStorage.setItem('isLogin', payload.isLogin)
      localStorage.setItem('userType', payload.userType)
    },
    setUser(state, user) {
      state.user = { ...state.user, ...user }
    },
    setUserType(state, type) {
      state.userType = type
      localStorage.setItem('userType', type)
    },
    setName(state, name) {
      state.name = name
      localStorage.setItem('name', name)
    },
    setBalance(state, balance) {
      state.balance = balance
      localStorage.setItem('balance', balance)
    },
    setPhone(state, phone) {
      state.phone = phone
      localStorage.setItem('phone', phone)
    },
    logout(state) {
      state.isLogin = false
      state.userType = 'user'
      localStorage.removeItem('privateKey')
      localStorage.removeItem('isLogin')
      localStorage.removeItem('userType')
    }
  },
  actions: {}
})

/**
 * 地址：
0xfcf987b57631156b1c5953cf54e842260c9a6e3f
私钥：
e2570baf27ac8c7e86cc065041336555e84752d6d6e2a02708a5085388708e41
 */
