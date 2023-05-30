<template>
  <div @click="emit('close-modal')" class="modal">
    <div @click.stop class="modal-content">
      <div
        :style="{ backgroundImage: `url(${image})` }"
        class="modal-content-image"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ui-modal",
};
</script>

<script setup>
const props = defineProps({
  image: {
    type: String,
    required: true,
  },
});
const emit = defineEmits(["close-modal"]);
</script>

<style lang="scss" scoped>
.modal {
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.842);
  display: flex;
  justify-content: center;
  align-items: center;
  &-content {
    width: 350px;
    height: 400px;
    background: white;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    &-image {
      width: 240px;
      height: 320px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
}
</style>
