import { createApp } from 'vue';
import pinia from '@/app/providers/store';
import router from './providers/router';
import App from './index.vue';

export const app = createApp(App).use(router).use(pinia);
