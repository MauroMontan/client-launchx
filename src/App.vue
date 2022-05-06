<template>
    <div id="app">
        <nav class="navbar navbar-expand navbar-light bg-white">
            <router-link to="/" class="navbar-brand">LaunchX</router-link>
            <div class="navbar-nav mr-auto">
                <li v-for="route in routes" :key="route.name" class="nav-item">
                    <router-link :to="route.to" class="nav-link">
                        {{ route.name }}
                    </router-link>
                </li>
            </div>
        </nav>
        <div class="container mt-3">
            <router-view />
        </div>
    </div>
</template>
<script>
export default {
    name: "app",
    setup() {
        return {
            routes: [
                {
                    to: "/explorers",
                    name: "Explorers",
                },
                {
                    to: "/add",
                    name: "Agregar explorer",
                },
                {
                    to: "/commanders",
                    name: "Commanders",
                },
                {
                    to: "/add-commander",
                    name: "Agregar Commander",
                },
            ],
        };
    },
};
</script>
