<template>
  <page-layout>
    <section class="login">
      <base-card
        class="login__card"
        width="450px"
        padding="0"
      >
        <header class="login__header">
          <h1 class="login__title">
            Вход
          </h1>
        </header>
        <div
          v-if="errorMessage"
          class="login__error-block"
        >
          <p class="login__error">
            {{ errorMessage }}
          </p>
        </div>
        <form
          class="login__form"
          @submit.prevent="tryLogin"
        >
          <base-text-input
            :id="formConfig.userName.id"
            v-model="formConfig.userName.value"
            input-size="100%"
            class="login__field"
            placeholder="Логин"
            :name="formConfig.userName.name"
            :type="formConfig.userName.type"
            :validation-rules="formConfig.userName.validationRules"
            :submitted="submitted"
            @set-field-validity="formConfig.userName.isValid = $event"
          />
          <base-text-input
            :id="formConfig.password.id"
            v-model="formConfig.password.value"
            input-size="100%"
            class="login__field"
            placeholder="Пароль"
            :name="formConfig.password.name"
            :type="formConfig.password.type"
            :validation-rules="formConfig.password.validationRules"
            :submitted="submitted"
            @set-field-validity="formConfig.password.isValid = $event"
          />
          <div class="login__registration-link-container">
            <span>Нет аккаунта?</span>
            <router-link
              class="login__registration-link"
              :to="{ name: routesNames.registration }"
            >
              Зарегистрироваться
            </router-link>
          </div>
          <div class="login__controls">
            <base-button
              class="login__submit-button"
              type="submit"
              variant="primary"
              :disabled="isFetching"
            >
              <span>Войти</span>
              <loading-spinner
                v-if="isFetching"
                class="login__submit-spinner"
                :size="14"
                color="#fff"
              />
            </base-button>
          </div>
        </form>
      </base-card>
    </section>
  </page-layout>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { AxiosError } from 'axios';

import { routesNames } from '@/pages/config';
import { useAuth } from '@/processes/auth/model/auth';

import { getErrorMessage } from '@/shared/api/lib';
import BaseButton from '@/shared/design/BaseButton.vue';
import BaseCard from '@/shared/design/BaseCard.vue';
import BaseTextInput from '@/shared/design/formElements/BaseTextInput.vue';
import PageLayout from '@/widgets/layout/index.vue';
import { useRouter } from 'vue-router';
import LoadingSpinner from '@/shared/design/UI/LoadingSpinner.vue';

const auth = useAuth();
const router = useRouter();

const formConfig = reactive({
  userName: {
    id: 'user-name',
    label: 'Имя пользователя',
    name: 'userName',
    type: 'text',
    value: '',
    validationRules: {
      required: {
        param: true,
        message: 'Имя пользователя обязательно',
      },
    },
    isValid: true,
  },
  password: {
    id: 'password',
    label: 'Пароль',
    name: 'password',
    type: 'password',
    value: '',
    validationRules: {
      required: {
        param: true,
        message: 'Пароль обязателен',
      },
      minLength: {
        param: 3,
        message: 'Пароль не может быть меньше 3 символов',
      },
    },
    isValid: true,
  },
});

const errorMessage = ref('');
const submitted = ref(false);
const isFetching = ref(false);

function checkFormValidity() {
  return Object.values(formConfig).every((field) => field.isValid);
}

async function tryLogin() {
  submitted.value = true;

  if (!checkFormValidity()) {
    return;
  }

  isFetching.value = true;

  try {
    await auth.login({ login: formConfig.userName.value, password: formConfig.password.value });
    await router.push({ name: routesNames.quiz });
  } catch (error) {
    if (error instanceof AxiosError) {
      errorMessage.value = getErrorMessage(error, 'Произошла ошибка при входе. Повторите попытку позже');
    }
  } finally {
    isFetching.value = false;
  }
}

</script>

<style lang="scss">
.login {
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
    margin-bottom: 0;

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
    justify-content: flex-end;
  }

  &__registration-link-container {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }

  &__registration-link {
    margin-left: 5px;

    color: rgb(59, 68, 246);
    text-decoration: none;
  }

  &__registration-link:hover,
  &__registration-link:focus {
    color: rgba(59, 68, 246, 0.8);
  }

  &__registration-link:active {
    color: rgba(59, 68, 246, 0.5);
  }

  &__field:not(:last-child) {
    margin-bottom: 10px;
  }

  &__submit-button {
    display: flex;
    align-items: center;
  }

  &__submit-spinner {
    margin-left: 4px;
  }
}
</style>
