import authService from '@/services/auth'

const state = {
    user: {}
}

const getters = {}

const actions = {
    login: function ({ commit }, credentials) {
        authService.login(credentials)
            .then(response => {
                commit('setAuthenticatedUser', response.data);
                window.location.href = "/"
            });
    },

    synchronize: function ({ commit }) {
        authService.synchronize()
            .then(response => {
                if (Object.keys(response.data).length === 0 && response.data.constructor === Object) {
                    commit('removeAuthenticatedUser')
                } else {
                    commit('setAuthenticatedUser', response.data)
                }
            })
    },
}

const mutations = {
    setAuthenticatedUser: function (state, user) {
        localStorage.setItem('user', JSON.stringify(user));
        state.user = user
    },

    removeAuthenticatedUser: function (state) {
        localStorage.removeItem('user')
        state.user = false
    },
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}