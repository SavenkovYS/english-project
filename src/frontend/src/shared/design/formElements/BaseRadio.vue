<template>
  <field-wrapper
    :id="id"
    is-horizontal
    :label="label"
  >
    <input
      :id="id"
      v-model="fieldValue"
      class="base-radio__input"
      :value="value"
      type="radio"
    >
  </field-wrapper>
</template>

<script lang="ts" setup>
import FieldWrapper from '@/shared/design/formElements/FieldWrapper.vue';
import { computed } from 'vue';

interface Props {
  id: string;
  modelValue: string;
  value: string;

  label?: string;
}

const {
  id, modelValue, value, label = '',
} = defineProps<Props>();

const emit = defineEmits<{(event: 'update:modelValue', inputValue: string): void }>();

const fieldValue = computed({
  get() {
    return modelValue;
  },
  set(newValue) {
    emit('update:modelValue', newValue);
  },
});

</script>

<style lang="scss" scoped>
.base-radio {
  &__input {
    margin: 0;
  }
}
</style>
