<template>
  <field-wrapper
    :id="id"
    :is-horizontal="isHorizontal"
    :label="label"
    :label-size="labelSize"
    :errors="errors"
    :should-show-errors="shouldShowErrors"
  >
    <input
      :id="id"
      v-model="fieldValue"
      class="base-input"
      :class="{'base-input--error': shouldShowErrors}"
      :name="name"
      :placeholder="placeholder"
      :style="inputStyles"
      :type="type"
      @blur="handleInputBlur"
    >
  </field-wrapper>
</template>

<script setup lang="ts">
import {
  computed, reactive, ref, onBeforeMount,
} from 'vue';
import FieldWrapper from '@/shared/design/formElements/FieldWrapper.vue';
import { getFieldErrors, IValidationRules } from '@/shared/design/formElements/lib';

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
    submitted?: boolean;
    validationRules?: IValidationRules
}

const emit = defineEmits<{(event: 'update:modelValue', value: string): void
  (event: 'set-field-validity', fieldValidity: boolean): void
}>();

const {
  type,
  id = '',
  inputSize = '100%',
  isHorizontal = false,
  label = '',
  labelSize = 'max-content',
  name = '',
  placeholder = '',
  modelValue = '',
  submitted = false,
  validationRules = {},
} = defineProps<Props>();

const errors: string[] = reactive([]);
const hideErrors = ref(false);
const isFieldValid = ref(true);

const shouldShowErrors = computed(() => submitted && !hideErrors.value && isFieldValid.value);

const inputStyles = computed(() => ({
  width: inputSize,
}));

const fieldValue = computed({
  get() {
    return modelValue;
  },
  set(newValue) {
    emit('update:modelValue', newValue);
  },
});

function validateField() {
  const fieldErrors = getFieldErrors(fieldValue.value, validationRules);
  Object.assign(errors, fieldErrors);
  if (fieldErrors.length > 0) {
    isFieldValid.value = false;
  } else {
    isFieldValid.value = true;
  }
  emit('set-field-validity', isFieldValid);
}

function handleInputBlur() {
  validateField();
  hideErrors.value = false;
}

onBeforeMount(() => {
  validateField();
});

</script>

<style lang="scss" scoped>
.base-input {
    box-sizing: border-box;
    padding: 7px 10px;

    border: 1px solid #333;
    border-radius: 5px;

    outline: none;
    transition: border-color 0.2s ease-in-out;

    &:hover,
    &:focus {
        border-color: #4CAF50;
    }

    &--error {
      border-color: rgb(223, 26, 26);
    }
}
</style>
