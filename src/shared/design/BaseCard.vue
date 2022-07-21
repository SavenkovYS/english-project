<template>
  <div
    class="base-card"
    :style="cardStyles"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
    width?: string
}
const { width = '300px' } = defineProps<Props>();

const cardStyles = computed(() => ({
  width,
}));
</script>

<style lang="scss" scoped>
    .base-card {
        margin: 0 auto;
        padding: 20px;
        box-sizing: border-box;

        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
    }
</style>
