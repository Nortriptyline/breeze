import samplesApi from '@/services/api/samples'

const state = {}
const getters = {}

const actions = {
    index({ commit }) {
        samplesApi.index()
        .then(data =>{
            console.log(data);
        })
    },
}

const mutations = {}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}