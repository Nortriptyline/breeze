import authService from '@/services/auth'
import router from '../../router'
import auth from '../../services/auth'

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

    pwd_email: function ({ commit }, email) {
        authService.pwd_email(email)
            .then(response => {
                commit('email_sent')
            })
    },

    pwd_reset: function({ commit }, credentials) {
        authService.pwd_reset(credentials)
            .then(response => {
                // !!! On set l'utilisateur sinon on a un pb de synchro
                commit('setAuthenticatedUser', response.data.user)
                router.push({name: 'Home'})
            })
    }
        
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

    email_sent: function(state) {

        console.log("email envoyé");
    }
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}