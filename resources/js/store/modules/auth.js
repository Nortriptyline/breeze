import authService from '@/services/auth'
import router from '../../router'

const state = {
    user: {},
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
                    commit("general/setErrors", error.response.data.errors, {root: true})
                }
            });
    },

    logout: function({ commit }) {
        authService.logout()
            .then(response => {
                commit('removeAuthenticatedUser');

                // Permet de récupérer un objet Route de et déterminer les métas appliquées
                const route = router.match(window.location.pathname)
                // Si la route actuelle n'a pas besoin d'être login, on ferme le drawer,
                // Sinon on redirige sur la page d'accueil.
                if (route.meta.requiresAuth) {
                    router.push({name: 'Landing'});
                } else {
                    commit('navbar/toggle', '', {root: true})
                }
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
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}