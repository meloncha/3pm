import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    defaultImg: '20210205132713974_img1.jpg',
    userStatus : null,
    authToken : null,
    refToken : null,
    kakaoId : null,
    userId : null,
    userInfo: null,
  },
  mutations: {
    setUserStatus(state,payload) {
      state.userStatus = payload
    },
    setAuthToken(state,payload) {
      state.authToken = payload
    },
    setRefToken(state, payload) {
      state.refToken = payload
    },
    setKakaoId(state,payload) {
      state.kakaoId = payload
    },
    setUserId(state,payload) {
      state.userId = payload
    },
    setUserInfo(state, payload) {
      state.userInfo = payload
    }
  },
  actions: {
    setUserStatus : function(context,payload) {
      context.commit('setUserStatus',payload)
    },
    setAuthToken : function(context,payload) {
      context.commit('setAuthToken',payload)
    },
    setRefToken : function(context,payload) {
      context.commit('setRefToken',payload)
    },
    setKakaoId : function(context,payload) {
      context.commit('setKakaoId',payload)
    },
    setUserId : function(context,payload) {
      context.commit('setUserId',payload)
    },
    setUserInfo : function(context, payload) {
      context.commit('setUserInfo', payload)
    }
  },
  plugins: [
    createPersistedState()
  ]
})
