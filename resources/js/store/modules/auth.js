import authService from '@/services/auth'

const state = {
    user: {}
}

const getters = {}

const actions = {
    login: function ({ commit }, credentials) {
        authService.login(credentials)
            .then(response => {
                if (response.status === 302) {
                    console.log("here")
                } else {
                    commit('setAuthenticatedUser', response.data);
                    window.location.href="/"
                }
            });
    },

    synchronize: function({ commit }) {
        authService.synchronize()
            .then(response => {
                commit('setAuthenticatedUser', response.data)
            })
    }
}

const mutations = {
    setAuthenticatedUser: function (state, user) {
        if (Object.keys(user).length === 0 && user.constructor === Object) {
            localStorage.removeItem('user')
            state.user = false
        } else {
            localStorage.setItem('user', JSON.stringify(user));
            state.user = user
        }
    },
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}