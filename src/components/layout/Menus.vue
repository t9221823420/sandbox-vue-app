<template>
    <v-list>
        <v-list-tile v-for="(item, id) in items" :key="id" :to="item.path" >
            <v-list-tile-content>
                <v-list-tile-title v-text="item.component.name"/>
            </v-list-tile-content>
        </v-list-tile>
    </v-list>
</template>

<script>
    export default {
        name: "Menus",
        data() {
            return {
                items_: [
                    {
                        title: 'About',
                        route: 'about'
                    },
                    {
                        title: 'Example 2',
                        route: 'bar'
                    },
                ]
            }
        },
        computed: {
            items(){
                return this.$router.options.routes;
            }
        }
    }
</script>

<style scoped>

</style>
