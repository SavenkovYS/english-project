<template>
  <header class="page-header">
    <div class="page-header__logo-container">
      <p class="page-header__logo">
        English Quiz
      </p>
    </div>
    <nav class="page-header__navigation">
      <ul
        v-if="auth.isLoggedIn"
        class="page-header__navigation-list"
      >
        <li
          v-for="action in actions"
          :key="action.id"
          class="page-header__navigation-item"
        >
          <router-link
            class="page-header__navigation-link"
            :to="{ name: action.link }"
          >
            {{ action.label }}
          </router-link>
        </li>
      </ul>
      <base-button
        class="page-header__logout-button"
        variant="link"
        @click="logoutUser"
      >
        Выйти
      </base-button>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

import { useAuth } from '@/processes/auth/model/auth';
import { routesNames } from '@/pages/config';
import BaseButton from '@/shared/design/BaseButton.vue';

const auth = useAuth();
const router = useRouter();

const actions = reactive([
  {
    id: 1,
    label: 'Викторина',
    link: routesNames.quiz,
  },
]);

async function logoutUser() {
  await auth.logout();
}
</script>

<style lang="scss" scoped>
.page-header {
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #4CAF50;

  &__logo {
    margin: 0;

    color: #fff;
    font-size: 1.25rem;
  }

  &__navigation {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-left: 100px;
  }

  &__navigation-list {
    margin: 0;
    padding: 0;

    list-style: none;
  }

  &__logout-button,
  &__navigation-link {
    color: #fff;

    font-size: 14px;

    text-decoration: none;
  }

  &__logout-button:hover,
  &__navigation-link:hover {
    color: rgba(255, 255, 255, 0.7)
  }
}
</style>
