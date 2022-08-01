<template>
  <page-layout>
    <section class="quiz-questions">
      <base-card width="800px">
        <loading-spinner
          v-if="areQuestionsLoading"
          :size="60"
          class="quiz-questions__loader"
        />
        <question-card
          v-else-if="!showResults"
          :question="currentQuestion"
          @go-to-next-question="goToNextQuestion"
        >
          <template #title>
            Вопрос {{ questionNumber }}
          </template>
        </question-card>
        <quiz-result
          v-else
          :results="userResults"
        />
      </base-card>
    </section>
  </page-layout>
</template>

<script setup lang="ts">
import PageLayout from '@/widgets/layout/index.vue';
import QuestionCard from '@/entities/question/ui/QuestionCard.vue';
import QuizResult from '@/entities/result/ui/QuizResult.vue';
import {
  computed, onBeforeMount, reactive, ref,
} from 'vue';
import { fetchQuestions } from '@/shared/api/question';
import { getErrorMessage } from '@/shared/api/lib';
import BaseCard from '@/shared/design/BaseCard.vue';
import LoadingSpinner from '@/shared/design/UI/LoadingSpinner.vue';
import { IQuestion } from '@/shared/api/question/model';
import { IQuizAnswer } from '@/pages/quiz/questions/model';

const questions: IQuestion[] = reactive([]);
const areQuestionsLoading = ref(false);
const currentQuestionIndex = ref(0);
const loadingError = ref(null);
const userResults: IQuizAnswer[] = reactive([]);
const showResults = ref(false);

const questionNumber = computed(() => currentQuestionIndex.value + 1);
const currentQuestion = computed(() => questions[currentQuestionIndex.value]);
const isLastQuestion = computed(() => currentQuestionIndex.value === questions.length - 1);

async function getQuestions() {
  areQuestionsLoading.value = true;
  try {
    const response = await fetchQuestions();
    Object.assign(questions, response.data);
  } catch (error) {
    loadingError.value = getErrorMessage(error, 'Произошла ошибка при загрузке!');
  } finally {
    areQuestionsLoading.value = false;
  }
}

function goToNextQuestion(userAnswerValue: string) {
  userResults.push({
    question: currentQuestion.value,
    userAnswerValue,
  });
  if (isLastQuestion.value) {
    showResults.value = true;
  } else {
    currentQuestionIndex.value += 1;
  }
}

onBeforeMount(() => {
  getQuestions();
});
</script>

<style scoped lang="scss">
  .quiz-questions {
    padding: 40px 20px;

    &__loader {
      margin: 0 auto;
    }

    &__answer {
      margin-bottom: 7px;
    }

    &__next-button {
      font-size: 14px;
    }
  }
</style>
