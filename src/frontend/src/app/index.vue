<template>
  <div class="app">
    <Routing />
    <base-modal />
  </div>
</template>

<script setup lang="ts">
import { Routing } from '@/pages';
import BaseModal from '@/shared/design/BaseModal.vue';
</script>

<style>
    body {
        margin: 0;
        padding: 0;

        font-size: 0.875rem;

        font-family: Arial;
    }
</style>
