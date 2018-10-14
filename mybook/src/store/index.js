import Vue from 'vue'
import Vuex from 'vuex'
import logger from "vuex/dist/logger"
import mutations from './mutations'
Vue.use(Vuex)
let state={carList:[]};
export default new Vuex.Store({
  state,
  strict:true,
  mutations,
  plugins:[logger()]
})
