<template>
  <page-layout>
    <section class="quiz-questions">
      <question-card
        :auestion-number="questionNumber"
        :is-fetching="areQuestionsLoading"
      >
        <template #title>
          Вопрос {{ questionNumber }}
        </template>
        <template #text>
          {{ questions[currentQuestionIndex].body }}
        </template>
      </question-card>
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

const questions = reactive([]);
const areQuestionsLoading = ref(false);
const currentQuestionIndex = ref(0);

const questionNumber = computed(() => currentQuestionIndex.value + 1);

async function getQuestions() {
  areQuestionsLoading.value = true;
  try {
    const response = await fetchQuestions();
    Object.assign(questions, response.data);
  } catch (error) {
    console.log(error);
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
  }
</style>
