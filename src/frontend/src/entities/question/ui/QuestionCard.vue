<template>
  <base-card
    width="800px"
  >
    <loading-spinner
      v-if="isFetching"
      size="60"
      class="question-card__loader"
    />
    <div
      v-else
      class="question-card__container"
    >
      <h2 class="question-card__title">
        <slot name="title" />
      </h2>
      <p class="question-card__text">
        <slot name="text" />
      </p>
    </div>
  </base-card>
</template>

<script setup lang="ts">
import BaseCard from '@/shared/design/BaseCard.vue';
import LoadingSpinner from '@/shared/design/UI/LoadingSpinner.vue';

interface Props {
  isFetching: boolean
}

const { isFetching = false } = defineProps<Props>();
</script>

<style lang="scss" scoped>
  .question-card {
    &__loader {
      margin: 0 auto;
    }
  }
</style>
