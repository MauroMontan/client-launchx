import { createWebHistory, createRouter } from "vue-router";
const routes = [
    {
        path: "/",
        alias: "/explorers",
        name: "explorers",
        component: () => import("./components/ExplorersList"),
    },
    {
        path: "/explorer/:id",
        name: "explorer-details",
        component: () => import("./components/Explorer"),
    },
    {
        path: "/add",
        name: "add-explorer",
        component: () => import("./components/AddExplorer"),
    },

    {
        path: "/add-commander",
        name: "add-commander",
        component: () => import("./components/AddCommander"),
    },

    {
        path: "/commanders",
        name: "commanders",
        component: () => import("./components/CoomandersList"),
    },

    {
        path: "/commander/:id",
        name: "commander-details",
        component: () => import("./components/Commander"),
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
