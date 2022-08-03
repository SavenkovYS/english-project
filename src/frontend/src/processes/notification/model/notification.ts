import { defineStore } from 'pinia';

export const useNotification = defineStore('notification', {
  state: () => ({
    shouldShowNotification: false,
    notificationText: null as null | string,
  }),
  actions: {
    showNotification(text: string) {
      this.notificationText = text;
      this.shouldShowNotification = true;
    },
    hideNotification() {
      this.notificationText = null;
      this.shouldShowNotification = false;
    },
  },
});
