<template>
  <page-layout>
    <section class="quiz-page">
      <div class="quiz-page__container">
        <base-card width="900px">
          <h2 class="quiz-page__title">
            Викторина
          </h2>
          <div class="quiz-page__text-container">
            <p class="quiz-page__text">
              Ответьте на 5 вопросов по английскому языку и проверьте свои знания!
            </p>
            <p class="quiz-page__text">
              Желаю успехов!
            </p>
          </div>
          <base-button
            class="quiz-page__start-button"
            @click="startQuiz"
          >
            Начать!
          </base-button>
        </base-card>
      </div>
    </section>
  </page-layout>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import routesNames from '@/pages/config';

import BaseCard from '@/shared/design/BaseCard.vue';
import BaseButton from '@/shared/design/BaseButton.vue';
import PageLayout from '@/widgets/layout/MainLayout.vue';

const router = useRouter();

function startQuiz() {
  router.push({ name: routesNames.questions });
}

</script>

<style scoped lang="scss">
  .quiz-page {
    padding: 20px;

    &__container {
      text-align: center;
    }

    &__title {
      margin-top: 0;
      margin-bottom: 10px;
    }

    &__text-container {
      margin-bottom: 20px;
    }

    &__text {
      margin-top: 0;
      margin-bottom: 0;

      font-size: 16px;
    }

    &__text:not(:last-child) {
      margin-bottom: 5px;
    }

    &__start-button {
      min-width: 150px;

      font-size: 16px;
    }
  }
</style>
