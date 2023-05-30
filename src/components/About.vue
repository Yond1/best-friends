<template>
  <div>
    <ui-modal
      :image="dataForModal"
      @close-modal="handleCloseModal"
      v-if="visibleModal"
    >
    </ui-modal>
    <h2>Наши Друзья<span>:</span></h2>
    <section class="about">
      <div
        @click="handleVisibleModal(image)"
        :key="image"
        v-for="(image, indx) of data[0]"
        :style="{ backgroundImage: `url(${image})` }"
        class="about-photo"
      ></div>
    </section>
  </div>
</template>

<script async setup>
import { searchPhoto } from "@/helpers/searchPhoto";
import { filterImg } from "../helpers/filterImg";
import { onMounted, ref } from "vue";

const visibleModal = ref(false);
const dataForModal = ref("");

const handleVisibleModal = (image) => {
  dataForModal.value = image;
  visibleModal.value = true;
  document.body.style.overflow = "hidden";
};

const handleCloseModal = () => {
  visibleModal.value = false;
  document.body.style.overflow = "";
};

let data = ref([]);

onMounted(async () => {
  let htmlObj;
  let result;
  await searchPhoto().then((res) => (result = res));
  htmlObj = result;
  htmlObj = htmlObj.map((item) => item.attribs["data-id"]);
  result = result.map((el) => filterImg(el.attribs.style));
  data.value = [result, htmlObj];
  console.log(data.value);
});
</script>

<style lang="scss" scoped>
h2 {
  text-align: center;
  margin-bottom: 20px;
  color: var(--main-color);
  pointer-events: none;
  user-select: none;
  align-items: center;
  span {
    color: var(--red-color);
  }
}
.about {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  gap: 10px;
  margin-bottom: 50px;
  &-photo {
    width: 185px;
    height: 127px;
    background-position: center 35%;
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.7s;
    &:hover,
    &:focus {
      opacity: 0.8;
    }
  }
}

@media screen and (max-width: 1200px) {
  .about {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media screen and (max-width: 1024px) {
  .about {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media screen and (max-width: 700px) {
  .about {
    grid-template-columns: repeat(2, 1fr);
    margin-top: -80px;
    gap: 30px;
  }
  @media screen and (max-width: 490px) {
    .about {
      grid-template-columns: repeat(1, 1fr);
      margin-top: -80px;
      gap: 30px;
    }
  }
}
</style>
