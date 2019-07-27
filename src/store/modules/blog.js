import { mapState } from 'vuex';

export default {
    namespaced: true,
    state: {
        posts: [
            { title: 'My journey with Vue', text: 'Post 1' },
            { title: 'Blogging with Vue', text: 'Post 2' },
            { title: 'Why Vue is so fun', text: 'Post 3' }
        ],
    },
    getters: {},
    mutations: {},
    actions:{},
    computed: {
        ...mapState([
            'posts'
        ])
    }
};
