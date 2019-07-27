<template>
    <v-container>
        <v-card>
            <v-card-title color="pink darken-2">{{ model.title }}</v-card-title>
            <v-card-text>{{ model.text }}</v-card-text>
            <v-card-actions>
                <v-flex class="text-xs-right">
                    <v-btn @click="$emit('post-edit')" icon>
                        <v-icon>edit</v-icon>
                    </v-btn>
                    <v-btn @click="$emit('post-delete')" icon>
                        <v-icon>delete</v-icon>
                    </v-btn>
                </v-flex>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        name: "Post",
        props: ['model']
    }
</script>

<style scoped>

</style>
