<template>
  <button
    :style="{
      background: background,
    }"
    class="bth"
  >
    <slot></slot>
    <img src="../../assets/svg/paw.svg" alt="" />
  </button>
</template>

<script>
export default {
  name: "ui-button",
};
</script>
<script setup>
const props = defineProps({
  background: {
    type: String,
    default: "var(--red-color)",
  },
});
</script>

<style lang="scss" scoped>
.bth {
  padding: 12px 32px;
  border: none;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  font-weight: 600;
  color: white;
  align-items: center;
  transition: 0.3s;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
  img {
    width: 15px;
  }
}
</style>
