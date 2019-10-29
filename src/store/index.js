import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import login from './login'
import home from './home'
import order from './order'
import user from './user'

export default new Vuex.Store({
  modules:{
    login,
    home,
    order,
    user
  }
})
