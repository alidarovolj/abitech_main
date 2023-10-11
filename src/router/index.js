import {createRouter, createWebHistory} from "vue-router";
import MainPage from "@/views/MainPage/index.vue";
import SectorPage from "@/views/Sector/index.vue";
import AccompPage from "@/views/Accomplishments/index.vue"

const router = createRouter({
    history: createWebHistory(), routes: [{
        path: "/", name: "MainPage", component: MainPage
    }, {
        path: "/sectors/:id", name: "SectorPage", component: SectorPage
    }, {
        path: "/accomplishments/:id", name: "AccompPage", component: AccompPage
    }, {
        path: "/accomplishments/:id", name: "AccompPage", component: AccompPage
    }
    ],
});

router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0);
    const isAuthenticated = localStorage.getItem("token");
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (!isAuthenticated) {
            next("/");
        } else {
            next();
        }
    } else {
        next();
    }
});


export default router;