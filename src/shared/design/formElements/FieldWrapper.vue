<template>
  <fieldset>
    <label :for="id">{{ label }}</label>
    <slot />
  </fieldset>
</template>

<script setup lang="ts">
interface Props {
    id?: string | number;
    label?: string;
}
const { id = '', label } = defineProps<Props>();
</script>

<style scoped>

</style>
