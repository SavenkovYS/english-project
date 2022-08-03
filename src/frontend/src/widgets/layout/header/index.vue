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
            :class="{'page-header__navigation-link--active': isLinkActive(action)}"
            :to="{ name: action.link }"
          >
            {{ action.label }}
          </router-link>
        </li>
      </ul>
      <base-button
        v-if="auth.isLoggedIn"
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
import { computed, reactive } from 'vue';
import { useRouter } from 'vue-router';

import { useAuth } from '@/processes/auth/model/auth';
import { routesNames } from '@/pages/config';
import BaseButton from '@/shared/design/BaseButton.vue';

const auth = useAuth();
const router = useRouter();

const isLinkActive = computed(() => function (action: { id: number, label: string, link: string}) {
  return router.currentRoute.value.fullPath.includes(action.link);
});

const actions = reactive([
  {
    id: 1,
    label: 'Викторина',
    link: routesNames.quiz,
  },
  {
    id: 2,
    label: 'Репетиторы',
    link: routesNames.tutors,
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
    width: max-content;

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
    display: flex;
    margin: 0;
    padding: 0;

    list-style: none;
  }

  &__navigation-item:not(:last-child) {
    margin-right: 15px;
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

  &__navigation-link--active {
    color: #f8cc36;
  }
}
</style>
