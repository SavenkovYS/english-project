<template>
  <footer class="page-footer">
    <ul class="page-footer__social-list">
      <li class="page-footer__social-list-item">
        <a
          href="https://hh.ru/resume/1ed74220ff0888a1810039ed1f78344e654f7a"
          class="page-footer__social-link page-footer__social-link--hh"
          target="_blank"
        />
      </li>
      <li>
        <a
          href="https://t.me/SavenkovYS"
          class="page-footer__social-link page-footer__social-link--tg"
          target="_blank"
        />
      </li>
    </ul>
  </footer>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
    .page-footer {
      display: flex;
      justify-content: center;
      padding: 20px;

      background-color: #f5f5f5;

      &__social-list {
        display: flex;
        margin: 0;
        padding: 0;

        list-style: none;
      }

      &__social-list-item:not(:last-child) {
        margin-right: 10px
      }

      &__social-link {
        position: relative;
        display: block;

        width: 25px;
        height: 25px;
      }

      &__social-link::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;

        width: 25px;
        height: 25px;

        background-size: contain;
        background-position: center;
      }

      &__social-link--hh::before {
        background-image: url('~@/shared/assets/img/logo_hh.svg');
      }

      &__social-link--tg::before {
        background-image: url('~@/shared/assets/img/logo_tg.svg');
      }
    }
</style>
