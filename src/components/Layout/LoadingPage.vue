<template>
  <div v-show="loading" :loading="loading" class="loading">
    <div class="loading-content">
      <ui-paw :key="cou" v-for="cou in count" :delay="cou" />
    </div>
  </div>
</template>

<script setup>
const count = 8;
const props = defineProps({
  loading: {
    type: Boolean,
    default: true,
  },
});
</script>

<style lang="scss" scoped>
.loading {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255);
  left: 0;
  z-index: 1000;
  &-content {
    width: 50%;
    height: 50%;
    padding: 10%;
    display: flex;
    gap: 40px;
    align-items: end;
  }
}
@media screen and (max-width: 1024px) {
  .loading {
    &-content {
      width: 80%;
      height: 30%;
    }
  }
}
</style>
