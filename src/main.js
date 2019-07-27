import Vue from 'vue';
import App from './App.vue';

import {router} from './routes.js'; // Router
import {store} from './store/store.js'; // Vuex

import Vuetify from 'vuetify';
import '../node_modules/vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app');
