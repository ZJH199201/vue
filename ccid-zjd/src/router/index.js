import Vue from 'vue';
import Router from 'vue-router';
import routerChildren from './routerChildren'
Vue.use(Router);

export default new Router({
    // mode: 'history',
    routes: [{
            path: "/",
            // redirect: "/Home/SupplementaryMaterials"
            redirect: "/Home/Homepage"
        },
        {
            path: "/login",
            component: resolve =>
                require(["../components/common/login.vue"], resolve),
        },
        {
            path: "/regist",
            component: resolve =>
                require(["../components/common/regist3.vue"], resolve),
        },
        // {
        //     path: "/regist2",
        //     component: resolve =>
        //         require(["../components/common/regist2.vue"], resolve),
        // },
        {
            path: "/Home",
            component: resolve =>
                require(["../components/common/Home.vue"], resolve),
            children: routerChildren
        },

        {
            path: "/test",
            component: resolve => require(['./../components/common/test.vue'], resolve)
        }
    ]
});