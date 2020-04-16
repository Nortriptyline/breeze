import axios from 'axios'

export default {
    baseUrl: '/samples/',

    index() {
        return axios.get(this.baseUrl)
            .then(response => {
                return response.data
            })
    },

    show(resource) {
        return axios.get(this.baseUrl + id)
            .then(response => {
                return response.data
            })
    },

    store() {
        return axios.post(this.baseUrl, {})
            .then(response => {
                return response.data
            })
    },

    destroy(resource) {
        return axios.delete(this.baseUrl + id)
            .then(response => {
                return response.data
            })
    }
}