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

    pwd_email: function(email) {
        return axios.post('/password/email', {
            email: email
        });
    },

    pwd_reset: function(credentials) {
        return axios.post('/password/reset', credentials);
    },

    synchronize: function() {
        return axios.get('/synchronize');
    }
}