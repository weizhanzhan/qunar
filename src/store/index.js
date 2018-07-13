import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)
//console.log(new Object(localStorage.item))

export default new Vuex.Store({
    state,
    mutations,
    actions
})