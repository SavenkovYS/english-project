import { createPinia } from 'pinia';
import router from '@/app/providers/router';
import { markRaw } from 'vue';
import { Router } from 'vue-router';

const pinia = createPinia();

declare module 'pinia' {
    export interface PiniaCustomProperties {
        router: Router
    }
}

pinia.use(({ store }) => {
  // eslint-disable-next-line no-param-reassign
  store.router = markRaw(router);
});

export default pinia;
