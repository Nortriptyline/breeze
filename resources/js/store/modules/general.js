const state = {
    errors: false,
}

const getters = {}

const actions = {
    removeErrors: function ({ commit }) {
        commit('removeErrors');
    },

    setErrors: function({ commit }, errors) {
        commit('setErrors', errors)
    }
}

const mutations = {
    setErrors: function (state, errors) {
        state.errors = errors
    },

    removeErrors: function (state) {
        state.errors = false
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}