<template>
  <div class="app">
    <loading-spinner v-if="isLoading" />
    <Routing v-else />
  </div>
</template>

<script setup lang="ts">
import { Routing } from '@/pages';
import { onBeforeMount, ref } from 'vue';
import { useAuth } from '@/processes/auth/model/auth';
import LoadingSpinner from '@/shared/design/UI/LoadingSpinner.vue';

const auth = useAuth();

const isLoading = ref(false);

async function checkUserAuth() {
  isLoading.value = true;
  if (!auth.isLoggedIn) {
    try {
      await auth.checkAuth();
    } catch (error) {
      console.log(error);
    } finally {
      isLoading.value = false;
    }
  }
}

onBeforeMount(() => {
  checkUserAuth();
});
</script>

<style>
    body {
        margin: 0;
        padding: 0;

        font-size: 0.875rem;

        font-family: Arial;
    }
</style>
