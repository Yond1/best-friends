<template>
  <header class="header">
    <div class="header-logo">
      <a href="#">
        <img :src="require(`@/assets/svg/${HeaderSvg}.svg`)" alt="Logo" />
      </a>
      <h1 class="header-logo-title">Лучший Друг</h1>
    </div>
    <menu class="header-menu">
      <ul>
        <li>Найти Друга</li>
        <li>О нас</li>
        <li>Вопросы и ответы</li>
        <li>Помощь приюту</li>
      </ul>
    </menu>
    <div class="header-login">
      <ui-button>Войти</ui-button>
    </div>
    <BackGround />
  </header>
</template>

<script setup>
import { onMounted, ref } from "vue";
import BackGround from "./BackGround.vue";

const HeaderSvg = ref("dogLogo");
const toggle = () => {
  HeaderSvg.value === "dogLogo"
    ? (HeaderSvg.value = "cat-logo")
    : (HeaderSvg.value = "dogLogo");
};
onMounted(() => {
  setInterval(() => {
    toggle();
  }, 10000);
});
</script>

<style lang="scss" scoped>
.header {
  height: 100px;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  justify-content: space-between;
  align-items: center;
  &-logo {
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    &-title {
      font-size: 24px;
      color: var(--main-color);
      pointer-events: none;
    }
    img {
      fill: red;
    }
  }
  &-menu {
    ul {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 20px;
      li {
        font-size: 20px;
        font-weight: 700;
        list-style: none;
        color: var(--main-color);
        cursor: pointer;
        margin-top: 2px;
        border-bottom: 2px solid transparent;
        transition: 0.2s;
        &:hover {
          border-bottom: 2px solid var(--main-color);
        }
      }
    }
  }
  &-login {
    display: flex;
    justify-content: end;
  }
}
</style>
