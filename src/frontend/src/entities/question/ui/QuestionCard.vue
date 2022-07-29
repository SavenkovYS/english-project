<template>
  <div>
    <div
      class="question-card__container"
    >
      <h2 class="question-card__title">
        <slot name="title" />
      </h2>
      <p class="question-card__text">
        {{ question.body }}
      </p>
      <p class="question-card__options-container">
        <base-radio
          v-for="answer in question.answers"
          :id="String(answer.value)"
          :key="answer.value"
          :label="answer.label"
          :model-value="String(answer.value)"
          class="question-card__answer"
          @update:modelValue="$emit('update-user-answer')"
        />
      </p>
      <slot name="next" />
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseRadio from '@/shared/design/formElements/BaseRadio.vue';
import { IQuestion } from '@/shared/api/question/model';

interface Props {
  question: IQuestion;
}

const { question } = defineProps<Props>();
</script>

<style lang="scss" scoped>
  .question-card {
    &__title {
      margin-top: 0;

      font-size: 22px;
    }

    &__text {
      font-size: 18px;
    }

    &__options-container {
      margin-bottom: 20px;
    }

    &__answer {
      font-size: 16px;
    }

    &__answer:not(:last-child) {
      margin-bottom: 10px;
    }
  }
</style>
