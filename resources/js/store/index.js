import Vue from 'vue'
import Vuex from 'vuex'

// import samples from './modules/samples'
import navbar from './modules/navbar'
import auth from './modules/auth'
import general from './modules/general'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        general,
        auth,
        navbar,
    }
})