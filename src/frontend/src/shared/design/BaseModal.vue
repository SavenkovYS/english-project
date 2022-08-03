<template>
  <div class="modal__layout">
    <div
      class="modal__body"
      :style="computedStyles"
    >
      <h2 class="modal__title">
        <slot name="title" />
      </h2>
      <slot />
      <div class="modal__controls">
        <slot name="controls" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  width?: string;
}

const { width = '40%' } = defineProps<Props>();

const computedStyles = computed(() => ({
  width,
}));

</script>

<style lang="scss" scoped>
  .modal {
    &__layout {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;

      display: flex;
      justify-content: center;
      align-items: center;

      background-color: rgba(0, 0, 0, 0.7);
    }

    &__body {
      margin-bottom: 300px;
      padding: 10px 20px;

      background-color: #fff;
      box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.3);
    }
  }
</style>
