<template>
  <span :class="active ? 'burger active' : 'burger'">
    <span></span>
  </span>
</template>
<script>
export default {
  name: "ui-burger-menu",
};
</script>

<script setup>
const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.burger {
  width: 40px;
  height: 40px;
  background: rgba(255, 0, 0, 0);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &.active {
    span {
      height: 0;
      &::before {
        transform: rotate(45deg);
        top: 0;
      }
      &::after {
        transform: rotate(-45deg);
        top: 0;
      }
    }
  }
  span {
    position: relative;
    width: 100%;
    height: 3px;
    background: var(--red-color);

    &::before {
      position: absolute;
      content: "";
      top: -10px;
      height: 3px;
      display: block;
      width: 100%;
      background: var(--red-color);
      transition: 0.3s;
    }
    &::after {
      position: absolute;
      content: "";
      top: 10px;
      height: 3px;
      display: block;
      width: 100%;
      background: var(--red-color);

      transition: 0.3s;
    }
  }
}
</style>
