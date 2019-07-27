<template>
    <v-container>
        <blog-post
                v-for="(post, i) in posts" :key="i"
                :model="post"
                @post-edit="editPost(post, i)"
                @post-delete="posts.splice(i, 1)"
        />
        <v-container>
            <SimpleEditForm
                form-title="New post"
                :btn-title="btn_title"
                :title="title"
                :text="text"
                @simple-edit-form-submit="savePost"
                @simple-edit-form-reset="reset"
            />
        </v-container>
    </v-container>
</template>

<script>

    const BUTTON_TITLE_ADD = 'Add';
    const BUTTON_TITLE_SAVE = 'Save';

    import blogPost from '../components/post/Post';
    import SimpleEditForm from '../components/forms/SimpleEditForm';

    export default {
        name: "Blog",
        data() {return{
            btn_title: BUTTON_TITLE_ADD,
            title: null,
            text: null,
            editPostId: null,
            posts: [
                { title: 'My journey with Vue', text: 'Post 1' },
                { title: 'Blogging with Vue', text: 'Post 2' },
                { title: 'Why Vue is so fun', text: 'Post 3' }
            ]
        }},
        methods:{
            savePost( data ){
                if( this.editPostId ){
                    this.posts[this.editPostId].title = data.title;
                    this.posts[this.editPostId].text = data.text;
                }
                else{
                    this.posts.push(data);
                }
            },
            editPost( post, id ){
                this.editPostId = id;
                this.btn_title = BUTTON_TITLE_SAVE;
                this.title = post.title;
                this.text = post.text;
            },
            reset () {
                this.editPostId = null;
                this.btn_title = BUTTON_TITLE_ADD;
            },
        },
        components: {
            blogPost,
            SimpleEditForm
        },
    }
</script>

<style scoped>

</style>
