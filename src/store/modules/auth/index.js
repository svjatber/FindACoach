import getters from './getters'
import mutations from './mutations'
import actions from './actions'


export default {
    namespaced: true,
    state() {
        return {
            userId: localStorage.getItem('userId'),
            token: localStorage.getItem('token'),
            tokenExpiration: localStorage.getItem('tokenExpiration')
        }
    },
    getters,
    mutations,
    actions
}
