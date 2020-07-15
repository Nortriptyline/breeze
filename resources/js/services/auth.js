import axios from 'axios'

export default {
    baseUrl: '/auth/',

    login: function(credentials) {
        return axios.post('/login', credentials);
    },

    logout: function() {
        return axios.post('/logout');
    },

    register: function(user) {
        return axios.post('/register', user)
    },

    pwd_reset: function() {
        return axios.post('/password/email');
    },

    mail_reset: function() {
        return axios.post('/password/reset');
    },

    synchronize: function() {
        return axios.get('/synchronize');
    }
}