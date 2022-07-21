<template>
  <button
    class="base-button"
    :class="'base-button--' + variant"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
    variant?: string
}

const { variant = 'primary' } = defineProps<Props>();
</script>

<style lang="scss" scoped>
.base-button {
    padding: 5px 10px;

    border-radius: 5px;
    cursor: pointer;

    &--primary {
        color: #fff;

        border: 1px solid #4CAF50;
        background-color: #4CAF50;
    }

    &--primary:hover {
        border-color: #4caf50;
        background-color: #4caf50;
    }

    &--primary:active {
        border-color: #77C27A;
        background-color: #77C27A;
    }
}
</style>
