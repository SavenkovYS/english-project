<template>
  <footer class="page-footer">
    {{ currentDate }}
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const currentDate = ref(new Date().getFullYear());
</script>

<style lang="scss" scoped>
    .page-footer {
        padding: 20px;

        background-color: #f5f5f5;
    }
</style>
