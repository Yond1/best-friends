<template>
  <div @click="emit('close-menu')" class="menu-mobile" v-show="active">
    <menu @click.stop class="menu-mobile-wrapper">
      <ul>
        <li :key="link.id" v-for="link of links">{{ link.title }}</li>
      </ul>
    </menu>
  </div>
</template>

<script setup>
const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
  links: {
    type: Array,
    required: true,
  },
});
const emit = defineEmits(["close-menu"]);
</script>

<style lang="scss" scoped>
.menu-mobile {
  position: fixed;
  backdrop-filter: blur(4px);
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: flex;
  justify-content: end;
  &-wrapper {
    padding-inline-start: 0;
    margin-block-start: 0;
    margin-block-end: 0;
    width: 400px;
    height: 100%;
    background: white;
    top: 0;
    transition: 0.4s;
    display: flex;
    justify-content: center;
    ul {
      margin-top: 100px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      li {
        list-style: none;
        font-size: 18px;
        font-weight: 700;
        color: var(--main-color);
        cursor: pointer;
        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
}
</style>
