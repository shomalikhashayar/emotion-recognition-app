<template>
  <div class="row items-center q-gutter-md">
    <div class="col">
      <q-img
        spinner-color="primary"
        class="border-radius-sm cursor-pointer"
        v-ripple
        src="images/text-size-md.svg"
        @click="setTextSize('md')"
      />
      <q-radio
        class="text-size-16 q-mt-md"
        dense
        size="36px"
        v-model="textSize"
        val="md"
        label="معمولی"
      />
    </div>
    <div class="col">
      <q-img
        spinner-color="primary"
        class="border-radius-sm cursor-pointer"
        v-ripple
        src="images/text-size-xl.svg"
        @click="setTextSize('lg')"
      />
      <q-radio
        class="text-size-16 q-mt-md"
        dense
        size="36px"
        v-model="textSize"
        val="xl"
        label="درشت"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();
const textSize = ref("");

const setTextSize = (size) => {
  textSize.value = size;
  document.body.setAttribute("data-text-size", size);
  document.cookie = `textSize=${size}; path=/; max-age=${60 * 60 * 24 * 30}`; // Save cookie for 30 days
};

onMounted(() => {
  const cookieValue = document.cookie.split('; ').find(row => row.startsWith('textSize='));
  if (cookieValue) {
    const size = cookieValue.split('=')[1];
    setTextSize(size); 
  }
});
</script>
