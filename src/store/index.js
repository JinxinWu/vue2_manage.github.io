import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //数据，相当于data
  state: {
    houseForm: {
      zhejiu: null,
      area: null,
      areaSum: null,
      res: null,
    },
    eleForm: {
      water: null,
      elec: null,
      areaSum: null,
      area: null,
      sum: null,
    },
  },
  getters: {

  },
  //里面定义方法，操作state方发
  mutations: {
    // 更新houseForm
    updateHouseForm(state, payload) {
      state.houseForm = payload
    },
    // 更新eleForm
    updateEleForm(state, payload) {
      state.eleForm = payload
    },
  },
  // 操作异步操作mutation
  actions: {

  },
  modules: {

  },
})