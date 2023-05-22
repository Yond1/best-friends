<template>
  <img
    :style="{
      animationDelay: `${delay / 4}s`,
      transform: `translate(${delay % 2 ? '10px' : '-24px'}, ${
        delay * -58
      }px) rotate(30deg)`,
    }"
    :delay="delay"
    src="../../assets/svg/pawLoad.svg"
    alt=""
    class="paw"
  />
</template>

<script>
export default {
  name: "ui-paw",
};
</script>

<script setup>
const props = defineProps({
  delay: {
    type: Number,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.paw {
  width: 50px;

  transform: rotate(20deg);
  animation: 1.8s paw 1;
  animation-fill-mode: forwards;
  opacity: 0;
}
@keyframes paw {
  0% {
    opacity: 0;
  }
  2% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
