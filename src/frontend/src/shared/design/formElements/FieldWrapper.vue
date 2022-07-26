<template>
  <fieldset
    class="field-wrapper"
    :class="{ 'field-wrapper--horizontal': isHorizontal }"
  >
    <label
      class="field-wrapper__label"
      :class="{ 'field-wrapper__label--horizontal': isHorizontal }"
      :for="id"
      :style="labelStyles"
    >{{ label }}</label>
    <slot />
    <div class="field-wrapper__errors-container" v-if="shouldShowErrors">
      <p class="field-wrapper__error" v-for="error in errors" :key="error">{{ error }}</p>
    </div>
  </fieldset>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  errors?: string[];
  id?: string;
  isHorizontal?: boolean;
  label?: string;
  labelSize?: string;
  shouldShowErrors?: boolean;
}
const {
  errors = [],
  id = '', 
  isHorizontal = false, 
  label = '', 
  labelSize = 'max-content',
  shouldShowErrors = false
} = defineProps<Props>();

const labelStyles = computed(() => ({
  width: labelSize,
}));
</script>

<style lang="scss" scoped>
.field-wrapper {
    display: flex;
    flex-direction: column;

    margin: 0;
    padding: 0;

    border: none;

    &--horizontal {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    &__label {
        margin-bottom: 5px;
    }

    &__label--horizontal {
        margin-bottom: 0;
        margin-right: 5px;
    }
}
</style>
