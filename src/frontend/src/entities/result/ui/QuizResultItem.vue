<template>
  <li
    class="quiz-result-item__question"
  >
    {{ result.question.body }}
    <ul class="quiz-result-item__answers-list">
      <li
        v-for="answer in result.question.answers"
        :key="answer.value"
        class="quiz-result-item__answer"
        :style="{'color': String(answer.value) === result.userAnswerValue && !answer.right ? 'red' : '', 'color': answer.right ? 'blue' : ''}"
      >
        {{ answer.label }}
      </li>
    </ul>
  </li>
</template>

<script setup lang="ts">
import { IQuizAnswer } from '@/pages/quiz/questions/model';

interface Props {
  result: IQuizAnswer
}

const { result } = defineProps<Props>();
</script>

<style lang="scss" scoped>
.quiz-result-item {
  &__answers-list {
    margin-top: 10px;
  }

  &__question:not(:last-child) {
    margin-bottom: 15px;
  }

  &__answer:not(:last-child) {
    margin-bottom: 5px;
  }
}

</style>
