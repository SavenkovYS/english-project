<template>
  <h2 class="quiz-result__title">
    Ваш результат
  </h2>
  <ul class="quiz-result__questions-list">
    <quiz-result-item
      v-for="result in results"
      :key="result.question.id"
      :result="result"
    />
  </ul>
</template>

<script setup lang="ts">
import { IQuizAnswer } from '@/pages/quiz/questions/model';
import QuizResultItem from '@/entities/result/ui/QuizResultItem.vue';

  interface Props {
    results: IQuizAnswer[]
  }

const { results } = defineProps<Props>();
</script>

<style lang="scss" scoped>
.quiz-result {
  &__title {
    margin-top: 0;
  }

  &__questions-list {
    margin: 0;
    padding: 0;

    list-style: none;
  }
}
</style>
