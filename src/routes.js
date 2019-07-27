import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import About from './views/About';
import Blog from './views/Blog';
import Validates from './views/Validates';
import BlogVuex from './views/BlogVuex';

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'about',
            path: '/about',
            component: About
        },
        {
            name: 'blog',
            path: '/blog',
            component: Blog
        },
        {
            name: 'validates',
            path: '/validates',
            component: Validates
        },
        {
            name: 'blog-vuex',
            path: '/blog-vuex',
            component: BlogVuex
        },

    ]
});
