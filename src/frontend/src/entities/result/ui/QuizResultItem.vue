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
        :style="answerStyles(answer)"
      >
        {{ answer.label }}
        <span v-if="String(answer.value) === result.userAnswerValue"> - Ваш ответ</span>
      </li>
    </ul>
    <p class="quiz-result-item__description">
      {{ result.question.description }}
    </p>
  </li>
</template>

<script setup lang="ts">
import { IQuizAnswer } from '@/pages/quiz/questions/model';
import { computed } from 'vue';

interface Props {
  result: IQuizAnswer
}
const { result } = defineProps<Props>();

const answerStyles = computed(() => (answer: any) => {
  const styles: {color?: string, fontWeight?: string} = {};
  if (String(answer.value) === result.userAnswerValue && !answer.right) {
    styles.color = 'red';
  }
  if (answer.right) {
    styles.color = 'green';
    styles.fontWeight = 'bold';
  }
  return styles;
});
</script>

<style lang="scss" scoped>
.quiz-result-item {

  &__question {
    position: relative;
  }

  &__question:not(:last-child) {
    padding-bottoM: 10px;
  }

  &__question:not(:last-child)::after {
    content: '';

    position: absolute;
    left: 0;
    bottom: 0;

    width: 100%;
    height: 1px;

    background-color: #333;
  }

  &__answers-list {
    margin-top: 15px;
  }

  &__question:not(:last-child) {
    margin-bottom: 20px;
  }

  &__answer:not(:last-child) {
    margin-bottom: 5px;
  }
}

</style>
