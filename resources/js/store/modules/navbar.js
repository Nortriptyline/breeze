const state = {
    active: false,
}

const getters = {}

const actions = {
    toggle({ commit }) {
        commit('toggle')
    },
}

const mutations = {
    toggle: function(state) {
        state.active = !state.active
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}