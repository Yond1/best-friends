<template>
  <span class="background"></span>
  <span class="blur"></span>
</template>

<script setup></script>

<style lang="scss" scoped>
.background {
  position: absolute;
  width: 100%;
  height: 800px;
  left: 0;
  border-radius: 0px 0px 50px 50px;
  top: 0;
  background-image: url("../../../public/image/homePage.jpg");
  background-size: cover;
  background-position: center;
  z-index: -1;
}
.blur {
  position: absolute;
  border-radius: 10px;
  backdrop-filter: blur(12px);
  width: 100%;
  height: 100px;
  z-index: -1;
  right: 0;
  background: rgba(255, 255, 255, 0.267);
}
</style>
