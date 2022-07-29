<template>
  <div
    class="loader"
    :style="{ width: `${size}px`, height: `${size}px` }"
  >
    <div
      class="loader-after"
      :style="[computedStyles]"
    />
  </div>
</template>

<script setup lang="ts">

import { computed } from 'vue';

interface Props {
  size?: number;
  color?: string;
  duration?: string;
}

const { color = '#4CAF50', size = 80, duration = '1.2s' } = defineProps<Props>();

const computedStyles = computed(() => ({
  borderWidth: `${size * 0.075}px`,
  animationDuration: duration,
  borderColor: `${color} transparent`,
}));

</script>

<style scoped>
.loader-after {
  content: ' ';
  display: block;
  /* ratio: calc(64px / 80px) */
  width: 80%;
  height: 80%;
  /* ratio: calc(8px / 80px) */
  margin: 10%;
  border-radius: 50%;
  border: 6px solid #000;
  border-color: #000 transparent #000 transparent;
  animation-name: loader;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
@keyframes loader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
