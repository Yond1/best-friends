<template>
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
console.log(LoadingPage);

onMounted(() => {
  const timer = setTimeout(() => {
    loading.value = false;
  }, 2000);
  return () => clearTimeout(timer);
});
</script>

<style lang="scss" scoped></style>
