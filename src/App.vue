<template>
  <span
    :style="{ top: `${yOffset}px`, left: `${xOffset}px` }"
    class="cursor"
  ></span>
  <LoadingPage :loading="loading" />
  <Header />
  <Main />
  <About />
</template>

<script setup>
import Header from "@/components/Layout/Header.vue";
import "./assets/style/global.scss";
import Main from "@/components/Main.vue";
import About from "@/components/About.vue";
import LoadingPage from "./components/Layout/LoadingPage.vue";
import { onMounted, ref } from "vue";

const loading = ref(true);
let xOffset = ref(10);
let yOffset = ref(0);

document.body.addEventListener("mousemove", (e) => {
  xOffset.value = e.pageX;
  yOffset.value = e.pageY;
});

onMounted(() => {
  const timer = setTimeout(() => {
    loading.value = false;
  }, 2000);
  return () => clearTimeout(timer);
});
</script>

<style lang="scss" scoped>
.cursor {
  position: absolute;
  width: 60px;
  height: 60px;
  background: var(--main-color);
  border-radius: 100%;
  opacity: 0.7;
  transform: translate(-30.5%, -30.5%);
  pointer-events: none;
  z-index: 100;
}
</style>
