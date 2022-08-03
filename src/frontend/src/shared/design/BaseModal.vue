<template>
  <div class="modal__layout">
    <div
      class="modal__body"
      :style="computedStyles"
    >
      <h2>I am modal title</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur doloremque exercitationem perspiciatis veniam voluptatem.
        Aliquam consequatur eligendi fugiat illum ipsa magnam maiores nesciunt nihil nisi quam repudiandae similique tempore, vitae!
      </p>
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
      padding: 10px 20px;

      background-color: #fff;
      box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.3);
    }
  }
</style>
