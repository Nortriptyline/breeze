import authService from '@/services/auth'
import router from '../../router'

const state = {
    user: {},
    errors: false,
}

const getters = {
    user: state => {
        return state.user
    }
}

const actions = {

    /**
     * Ask the server to authenticate a user
     * 
     * @param {*} param0 
     * @param {*} credentials 
     */
    login: function ({ commit }, credentials) {
        authService.login(credentials)
            .then(response => {
                commit('setAuthenticatedUser', response.data);
                router.push('/home');
            })
            .catch(error => {
                if (error.response.status === 422) {
                    commit('setErrors', error.response.data.errors)
                }
            });
    },

    logout: function({ commit }) {
        authService.logout()
            .then(response => {
                commit('removeAuthenticatedUser');
                router.push({name: 'Landing'});
            })
    },

    register: function({ commit }, newUser) {
        authService.register(newUser)
        .then(response => {
            commit('setAuthenticatedUser', response.data)
            router.push({name: 'Landing'})
        })
    },

    /**
     * Synchronize login state with server
     * 
     * @param {*} param0 
     */
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
    /**
     * Set user in local storage and store. They must be synched together
     * 
     * @param {*} state 
     * @param {*} user 
     */
    setAuthenticatedUser: function (state, user) {
        localStorage.setItem('user', JSON.stringify(user));
        state.user = user
    },

    /**
     * Remove user from storage and store. App consider him as guest
     * @param {} state 
     */
    removeAuthenticatedUser: function (state) {
        localStorage.removeItem('user')
        state.user = false
    },

    setErrors: function(state, errors) {
        state.errors = errors
    },
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}