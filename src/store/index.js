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
    bagForm: {
      cost: null,
    },
    deviceData: [],
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
    // 更新bagForm
    updateBagForm(state, payload) {
      state.bagForm = payload
    },
    // 更新deviceData
    updateBagForm(state, payload) {
      state.deviceData = deviceData
    },
  },
  // 操作异步操作mutation
  actions: {

  },
  modules: {

  },
})