<template>
    <v-app id="sandbox" :dark="dark">
        <v-navigation-drawer
                v-model="primaryDrawer.model"
                :permanent="primaryDrawer.type === 'permanent'"
                :temporary="primaryDrawer.type === 'temporary'"
                :clipped="primaryDrawer.clipped"
                :floating="primaryDrawer.floating"
                :mini-variant="primaryDrawer.mini"
                absolute
                overflow
                app
        >
            <Menus/>
        </v-navigation-drawer>
        <v-toolbar :clipped-left="primaryDrawer.clipped" app absolute>
            <v-toolbar-side-icon
                    v-if="primaryDrawer.type !== 'permanent'"
                    @click.stop="primaryDrawer.model = !primaryDrawer.model"
            ></v-toolbar-side-icon>
            <v-toolbar-title>Sanbox App</v-toolbar-title>
        </v-toolbar>

        <v-content>
            <v-container>
                <v-layout>
                    <keep-alive>
                        <router-view></router-view>
                    </keep-alive>
                </v-layout>
            </v-container>
        </v-content>

        <v-footer :inset="footer.inset" app>
            <span class="px-3">&copy; {{ new Date().getFullYear() }}</span>
        </v-footer>
    </v-app>
</template>

<script>

    import Menus from './components/layout/Menus';

    export default {
        name: 'App',
        components: {
            Menus
        },
        data: () => ({
            dark: true,
            drawers: ['Default (no property)', 'Permanent', 'Temporary'],
            primaryDrawer: {
                model: null,
                type: 'default (no property)',
                clipped: true,
                floating: true,
                mini: false
            },
            footer: {
                inset: false
            }
        })
    }
</script>
