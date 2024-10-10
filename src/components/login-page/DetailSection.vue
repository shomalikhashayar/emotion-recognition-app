<template>
  <q-img
    cover
    class="col"
    :src="`/images/${store.currentImage.value}.jpg`"
    :alt="`${store.currentImage.value} image`"
    spinner-color="primary"
    v-if="imageLoaded"
  />
  <p v-else>Image not available</p>
</template>

<script setup>
import { ref, watch } from "vue";
import { useLoginEmotions } from "src/composables/useLoginEmotions";

const store = useLoginEmotions();
const imageLoaded = ref(true);

const handleError = () => {
  imageLoaded.value = false;
};

watch(
  () => store.currentImage.value,
  () => {
    imageLoaded.value = true;
  }
);
</script>
