import Vue from 'vue'
import Vuex from 'vuex'

import blog from './modules/blog';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        blog,
    },
    strict: true
})
