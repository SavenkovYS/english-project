<template>
  <div>
    <h2 class="quiz-result__title">
      Ваш результат - <span class="quiz-result__score">{{ rightAnswersNumber }}/{{ totalQuestionsNumber }}</span>
    </h2>
    <ul class="quiz-result__questions-list">
      <quiz-result-item
        v-for="result in results"
        :key="result.question.id"
        :result="result"
      />
    </ul>
    <div class="quiz-result__controls">
      <base-button
        class="quiz-result__restart-button"
        @click="restartQuiz"
      >
        Начать заново
      </base-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IQuizAnswer } from '@/pages/quiz/questions/model';
import QuizResultItem from '@/entities/result/ui/QuizResultItem.vue';
import BaseButton from '@/shared/design/BaseButton.vue';
import { computed } from 'vue';

interface Props {
  results: IQuizAnswer[];
}
const { results } = defineProps<Props>();
const emit = defineEmits<{(event: 'restart-quiz'): void}>();

const totalQuestionsNumber = computed(() => results.length);

const rightAnswersNumber = computed(() => results.filter((result: IQuizAnswer) => {
  const userAnswer = result.question.answers.find((answer) => String(answer.value) === result.userAnswerValue);
  return userAnswer?.right;
}).length);

function restartQuiz() {
  emit('restart-quiz');
}
</script>

<style lang="scss" scoped>
.quiz-result {
  &__title {
    margin-top: 0;
  }

  &__score {
    font-size: 24px;

    text-decoration: underline;
  }

  &__questions-list {
    margin: 0;
    padding: 0;

    font-size: 16px;

    list-style: none;
  }

  &__controls {
    display: flex;
    justify-content: flex-end;
  }

  &__restart-button {
    font-size: 16px;
  }
}
</style>
