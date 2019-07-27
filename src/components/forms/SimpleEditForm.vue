<template>
    <v-form ref="form">
        <h2>{{ formTitle }}</h2>
        <v-text-field prepend-icon="folder"
                v-model="titleValue"
                label="Title"
        ></v-text-field>
        <v-textarea prepend-icon="edit"
                v-model="textValue"
                label="Text"
        />

        <v-btn color="success" @click="submit" > {{ btnTitle }} </v-btn>
        <v-btn color="info" @click="reset" > Reset </v-btn>
    </v-form>
</template>

<script>
    export default {
        name: "SimpleEditForm",
        props: {
            formTitle: String,
            btnTitle: {
                default: 'Submit'
            },
            title: String,
            text: String,
        },
        data(){ return {
            editMode: false,
            titleValue: this.title,
            textValue: this.text
        }},
        watch:{
            title(){
                this.titleValue = this.title;
            },
            text(){
                this.textValue = this.text;
            },
        },
        methods: {
            submit() {
                this.$emit('simple-edit-form-submit', {
                    title: this.titleValue,
                    text: this.textValue,
                });
            },
            reset () {
                this.$refs.form.reset();
                this.$emit('simple-edit-form-reset');
            },
        }
    }
</script>

<style scoped>

</style>
