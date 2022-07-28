<template>
  <div class="app">
    <Routing />
  </div>
</template>

<script setup lang="ts">
import { Routing } from '@/pages';
import { onBeforeMount } from 'vue';
import { useAuth } from '@/processes/auth/model/auth';

const auth = useAuth();

onBeforeMount(() => {
  if (localStorage.getItem('accessToken')) {
    auth.checkAuth();
  }
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
