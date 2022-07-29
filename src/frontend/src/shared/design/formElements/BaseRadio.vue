<template>
  <field-wrapper
    is-horizontal
    :label="label"
  >
    <input type="radio">
  </field-wrapper>
</template>

<script lang="ts" setup>
import FieldWrapper from '@/shared/design/formElements/FieldWrapper.vue';

interface Props {
  label?: string;
}

const { label = '' } = defineProps<Props>();

</script>

<style scoped>

</style>
