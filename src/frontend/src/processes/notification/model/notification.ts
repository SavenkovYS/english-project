import { defineStore } from 'pinia';

import { routesNames } from '@/pages/config';

export const useNotification = defineStore('notification', {
  state: () => ({
    showNotification: false,
    notificationText: null as null | string,
  }),
  actions: {
    showNotification(text: string) {
      this.notificationText = text;
      this.showNotification = true;
    },
  },
});
