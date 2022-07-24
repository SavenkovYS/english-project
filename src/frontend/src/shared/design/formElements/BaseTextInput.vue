<template>
  <field-wrapper
    :id="id"
    :is-horizontal="isHorizontal"
    :label="label"
    :label-size="labelSize"
  >
    <input
      :id="id"
      class="base-input"
      :name="name"
      :placeholder="placeholder"
      :style="inputStyles"
      :type="type"
      v-model="value"
    >
  </field-wrapper>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import FieldWrapper from '@/shared/design/formElements/FieldWrapper.vue';

interface Props {
    type: string;

    id?: string;
    inputSize?: string;
    isHorizontal?: boolean;
    label?: string;
    labelSize?: string;
    name?: string;
    placeholder?: string;
    modelValue?: string;
};

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void
}>();

const inputStyles = computed(() => ({
  width: inputSize,
}));
const value = computed({
  get() {
    return modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  }
});

const {
  type, 
  id = '', 
  inputSize = '100%', 
  isHorizontal = false, 
  label = '', 
  labelSize = 'max-content',
  name = '', 
  placeholder = '', 
  modelValue = ''
} = defineProps<Props>();

</script>

<style lang="scss" scoped>
.base-input {
    padding: 7px 10px;

    border: 1px solid #333;
    border-radius: 5px;

    outline: none;
    transition: border-color 0.2s ease-in-out;

    &:hover,
    &:focus {
        border-color: green;
    }
}
</style>
