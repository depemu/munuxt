import Vuex from 'vuex'

import state from './Global/state'
import getters from './Global/getters'
import mutations from './Global/mutations'
import actions from './Global/actions'

import Settings from './Settings'

export default () => {
  return new Vuex.Store({
    modules: {
      Settings
    },
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions
  })
}
