<template>
  <fieldset
    class="field-wrapper"
    :class="{ 'field-wrapper--horizontal': isHorizontal }"
  >
    <div
      class="field-wrapper__input-container"
      :class="{ 'field-wrapper__input-container--horizontal': isHorizontal }"
    >
      <label
        class="field-wrapper__label"
        :class="{ 'field-wrapper__label--horizontal': isHorizontal }"
        :for="id"
        :style="labelStyles"
      >{{ label }}</label>
      <slot />
    </div>
    <div
      v-if="shouldShowErrors"
      class="field-wrapper__errors-container"
    >
      <p
        v-for="error in errors"
        :key="error"
        class="field-wrapper__error"
      >
        {{ error }}
      </p>
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
  shouldShowErrors = false,
} = defineProps<Props>();

const labelStyles = computed(() => ({
  width: labelSize,
}));
</script>

<style lang="scss" scoped>
.field-wrapper {
  margin: 0;
  padding: 0;

  border: none;

  &__input-container {
      display: flex;
      flex-direction: column;
  }

  &__input-container--horizontal {
      flex-direction: row-reverse;
      align-items: center;
      justify-content: flex-end;
  }

  &__label {
      margin-bottom: 5px;
  }

  &__label--horizontal {
      margin-bottom: 0;
      margin-left: 5px;
  }

  &__error {
    margin-top: 3px;
    margin-bottom: 0;

    color: rgb(223, 26, 26);
  }
}
</style>
