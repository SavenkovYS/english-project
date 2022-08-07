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
          v-model="selectedAnswer"
          :label="answer.label"
          :value="String(answer.value)"
          class="question-card__answer"
        />
      </p>
      <base-button
        class="quiz-questions__next-button"
        :disabled="!selectedAnswer"
        @click="goToNextQuestion"
      >
        Следующий вопрос
      </base-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import BaseRadio from '@/shared/design/formElements/BaseRadio.vue';
import { IQuestion } from '@/shared/api/question/model';
import BaseButton from '@/shared/design/BaseButton.vue';

interface Props {
  question: IQuestion;
}
const { question } = defineProps<Props>();
const emit = defineEmits<{(event: 'go-to-next-question', value: string): void}>();

const selectedAnswer = ref('');

function goToNextQuestion() {
  if (selectedAnswer.value) {
    emit('go-to-next-question', selectedAnswer.value);
    selectedAnswer.value = '';
  }
}

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
