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
        <form class="login__form">
          <base-text-input
            :id="formConfig.userName.id"
            input-size="250px"
            class="login__field"
            placeholder="Логин"
            :label="formConfig.userName.label"
            :name="formConfig.userName.name"
            :type="formConfig.userName.type"

            is-horizontal
          />
          <base-text-input
            :id="formConfig.password.id"
            input-size="250px"
            class="login__field"
            placeholder="Пароль"
            :label="formConfig.password.label"
            :name="formConfig.password.name"
            :type="formConfig.password.type"
            is-horizontal
          />
          <div class="login__registration-link-container">
            <span>Нет аккаунта?</span>
            <router-link class="login__registration-link" :to="{ name: routesNames.registration }">Зарегистрируйтесь</router-link>
          </div>
          <div class="login__controls">
            <base-button
              type="button"
              variant="primary"
            >
              Войти
            </base-button>
          </div>
        </form>
      </base-card>
    </section>
  </page-layout>
</template>

<script lang="ts">
import { reactive } from 'vue';
import { routesNames } from '@/pages/config';
import BaseButton from '@/shared/design/BaseButton.vue';
import BaseCard from '@/shared/design/BaseCard.vue';
import BaseTextInput from '@/shared/design/formElements/BaseTextInput.vue';
import PageLayout from '@/widgets/layout/index.vue';

export default {
  name: 'LoginView'
}
</script>

<script setup lang="ts">


const formConfig = reactive({
  userName: {
    id: 'user-name',
    label: 'Имя пользователя',
    name: 'userName',
    type: 'text',
  },
  password: {
    id: 'password',
    label: 'Пароль',
    name: 'password',
    type: 'password',
  },
});

</script>

<style lang="scss" scoped>
    .login {
        padding-top: 100px;

        &__header {
            padding: 20px;

            color: #fff;
            text-align: center;

            border-bottom: 1px solid #4CAF50;
            background-color: #4CAF50;
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

        &__controls {
            display: flex;
            justify-content: flex-end;
        }

        &__field:not(:last-child) {
            margin-bottom: 20px;
        }
    }
</style>
