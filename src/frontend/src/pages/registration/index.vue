<template>
  <page-layout>
    <section class="resistration">
      <base-card
        class="resistration__card"
        width="450px"
        padding="0"
      >
        <header class="resistration__header">
          <h1 class="resistration__title">
            Регистрация
          </h1>
        </header>
        <form
          class="resistration__form"
          @submit.prevent
        >
          <base-text-input
            :id="formConfig.userName.id"
            input-size="250px"
            class="resistration__field"
            placeholder="Логин"
            :label="formConfig.userName.label"
            :name="formConfig.userName.name"
            :type="formConfig.userName.type"

            is-horizontal
          />
          <base-text-input
            :id="formConfig.password.id"
            input-size="250px"
            class="resistration__field"
            placeholder="Пароль"
            :label="formConfig.password.label"
            :name="formConfig.password.name"
            :type="formConfig.password.type"
            is-horizontal
          />
          <div class="resistration__controls">
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
import { reactive } from 'vue';
import BaseButton from '@/shared/design/BaseButton.vue';
import BaseCard from '@/shared/design/BaseCard.vue';
import BaseTextInput from '@/shared/design/formElements/BaseTextInput.vue';
import PageLayout from '@/widgets/layout/index.vue';

export default {
  name: 'RegistrationPage',
};
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
.resistration {
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

    &__controls {
         display: flex;
         justify-content: center;
    }

    &__controls button {
      width: 100%;
    }

    &__submit-button {
      width: 100%;
      background-color: red;
    }

    &__field:not(:last-child) {
         margin-bottom: 20px;
    }
}
</style>
