<template>
  <div class="page-layout">
    <page-header />
    <slot />
    <page-footer class="page-layout__footer" />
  </div>
</template>

<script setup lang="ts">
import PageHeader from './header/index.vue';
import PageFooter from './footer/index.vue';

</script>

<style lang="scss" scoped>
    .page-layout {
        display: flex;
        flex-direction: column;
        min-height: 100vh;

        &__footer {
            margin-top: auto;
        }
    }
</style>
