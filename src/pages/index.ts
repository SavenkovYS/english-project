import Routing from './index.vue';
import { RouteRecordRaw } from "vue-router";

export const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'main',
        component: () => import('./index.vue')
    }
]

export { Routing }