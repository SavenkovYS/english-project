<template>
  <div class="app">
    <Routing />
    <base-modal
      v-if="notification.shouldShowNotification"
      @close-modal="notification.hideNotification"
    >
      {{ notification.notificationText }}
    </base-modal>
  </div>
</template>

<script setup lang="ts">
import { Routing } from '@/pages';
import BaseModal from '@/shared/design/BaseModal.vue';
import { useNotification } from '@/processes/notification/model/notification';
import { computed } from 'vue';

const notification = useNotification();
</script>

<style>
    body {
        margin: 0;
        padding: 0;

        font-size: 0.875rem;

        font-family: Arial;
    }
</style>
