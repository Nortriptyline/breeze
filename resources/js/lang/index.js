import Vue from 'vue';
import french from './fr'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n);

const i18n = new VueI18n({
    locale: 'fr',
    messages: {
        fr: french
    }
}) 

export default i18n;
