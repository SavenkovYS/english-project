<template>
  <page-layout>
    <section class="registration">
      <base-card
        class="registration__card"
        width="450px"
        padding="0"
      >
        <header class="registration__header">
          <h1 class="registration__title">
            Регистрация
          </h1>
        </header>
        <div v-if="errorMessage" class="registration__error-block">
          <p class="registration__error">{{ errorMessage }}</p>
        </div>
        <form
          class="registration__form"
          @submit.prevent="registerUser"
        >
          <base-text-input
            :id="formConfig.userName.id"
            input-size="250px"
            class="registration__field"
            placeholder="Логин"
            :label="formConfig.userName.label"
            :name="formConfig.userName.name"
            :type="formConfig.userName.type"
            v-model="formConfig.userName.value"
            is-horizontal
          />
          <base-text-input
            :id="formConfig.password.id"
            input-size="250px"
            class="registration__field"
            placeholder="Пароль"
            :label="formConfig.password.label"
            :name="formConfig.password.name"
            :type="formConfig.password.type"
            v-model="formConfig.password.value"
            is-horizontal
          />
          <div class="registration__login-link-container">
            <span>Уже есть аккаунт?</span>
            <router-link class="registration__login-link" :to="{ name: routesNames.login }">Войти</router-link>
          </div>
          <div class="registration__controls">
            <base-button
              class="registration__submit-button"
              type="submit"
              variant="primary"
            >
              Зарегистрироваться
            </base-button>
          </div>
        </form>
      </base-card>
    </section>
  </page-layout>
</template>

<script lang="ts">
export default {
  name: 'RegistrationPage'
};
</script>

<script setup lang="ts">
import { reactive, ref } from 'vue';

import { routesNames } from '@/pages/config';
import { useAuth } from '@/processes/auth/model/auth';
import { getErrorMessage } from '@/shared/api/lib';

import BaseButton from '@/shared/design/BaseButton.vue';
import BaseCard from '@/shared/design/BaseCard.vue';
import BaseTextInput from '@/shared/design/formElements/BaseTextInput.vue';
import PageLayout from '@/widgets/layout/index.vue';
import { AxiosError } from 'axios';
import { router } from "@/app/providers";

const auth = useAuth();

const formConfig = reactive({
  userName: {
    id: 'user-name',
    label: 'Имя пользователя',
    name: 'userName',
    type: 'text',
    value: ''
  },
  password: {
    id: 'password',
    label: 'Пароль',
    name: 'password',
    type: 'password',
    value: ''
  }
});

let errorMessage = ref('')

async function registerUser() {
  try {
    await auth.registerUser({ login: formConfig.userName.value, password: formConfig.password.value });
    await router.push({ name: routesNames.quiz });
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response)
      errorMessage.value = getErrorMessage(error, 'Произошла ошибка при входе. Повторите попытку позже')
    }
  }
  
}
</script>

<style lang="scss" scoped>
.registration {
    padding-top: 100px;

    &__header {
         padding: 20px;

         color: #fff;
         text-align: center;

         border-bottom: 1px solid #4CAF50;
         background-color: #4CAF50;
    }

    &__error-block {
      padding: 0 10px;
    }

    &__error {
      padding: 10px;

      color: #fff;

      background-color: rgb(223, 26, 26);
      border-radius: 3px;
    }

    &__title {
         font-size: 1.5rem;
         font-weight: 400;
         letter-spacing: 1px;
         margin: 0;

         text-transform: uppercase;
    }

    &__form {
         padding: 20px;
    }

    &__controls {
        display: flex;
        justify-content: center;
    }


    &__login-link-container {
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
    }

    &__login-link {
      margin-left: 5px;

      color: rgb(59, 68, 246);
      text-decoration: none;
    }

    &__login-link:hover,
    &__login-link:focus {
      color: rgba(59, 68, 246, 0.8);
    }

    &__login-link:active {
      color: rgba(59, 68, 246, 0.5);
    }

    &__submit-button {
      width: 100%;
    }

    &__field:not(:last-child) {
         margin-bottom: 20px;
    }
}
</style>
