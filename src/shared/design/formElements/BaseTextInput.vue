<template>
  <field-wrapper
    :id="id"
    :label="label"
  >
    <input
      :id="id"
      :name="name"
      :placeholder="placeholder"
      :type="type"
    >
  </field-wrapper>
</template>

<script setup lang="ts">
import FieldWrapper from '@/shared/design/formElements/FieldWrapper.vue';

interface Props {
    id?: string | number,
    label?: string;
    name?: string;
    placeholder?: string;
    type: string;
}

const {
  type, name = '', label = '', placeholder = '', id = '',
} = defineProps<Props>();

</script>

<style scoped>

</style>
