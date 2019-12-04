import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

export default {
  namespace: true,
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
}
