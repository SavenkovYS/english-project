<template>
  <page-layout>
    <section class="login">
      <base-card
        class="login-view__card"
        width="450px"
      >
        <header class="login-view__header">
          <h1 class="login-view__title">
            Вход
          </h1>
        </header>
        <form>
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
        </form>
      </base-card>
    </section>
  </page-layout>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import BaseCard from '@/shared/design/BaseCard.vue';
import BaseTextInput from '@/shared/design/formElements/BaseTextInput.vue';
import PageLayout from '@/widgets/layout/index.vue';

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
        &__field:not(:last-child) {
            margin-bottom: 20px;
        }
    }
</style>
