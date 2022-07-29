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
          v-else
          :question="currentQuestion"
        >
          <template #title>
            Вопрос {{ questionNumber }}
          </template>
          <template #next>
            <base-button class="quiz-questions__next-button">
              Следующий вопрос
            </base-button>
          </template>
        </question-card>
      </base-card>
    </section>
  </page-layout>
</template>

<script setup lang="ts">
import PageLayout from '@/widgets/layout/index.vue';
import QuestionCard from '@/entities/question/ui/QuestionCard.vue';
import {
  computed, onBeforeMount, reactive, ref,
} from 'vue';
import { fetchQuestions } from '@/shared/api/question';
import BaseButton from '@/shared/design/BaseButton.vue';
import { getErrorMessage } from '@/shared/api/lib';
import BaseCard from '@/shared/design/BaseCard.vue';
import LoadingSpinner from '@/shared/design/UI/LoadingSpinner.vue';
import { IQuestion } from '@/shared/api/question/model';

const questions: IQuestion[] = reactive([]);
const areQuestionsLoading = ref(false);
const currentQuestionIndex = ref(0);
const loadingError = ref(null);

const questionNumber = computed(() => currentQuestionIndex.value + 1);
const currentQuestion = computed(() => questions[currentQuestionIndex.value]);

async function getQuestions() {
  areQuestionsLoading.value = true;
  try {
    const response = await fetchQuestions();
    Object.assign(questions, response.data);
    console.log(response);
  } catch (error) {
    loadingError.value = getErrorMessage(error, 'Произошла ошибка при загрузке!');
  } finally {
    areQuestionsLoading.value = false;
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
