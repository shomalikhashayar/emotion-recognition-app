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
        @click="setTextSize('md')"
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
        val="lg"
        label="درشت"
        @click="setTextSize('lg')"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();
const textSize = ref("md"); // Default value

const setTextSize = (size) => {
  textSize.value = size; // Update the text size
  document.body.setAttribute("data-text-size", size); // Change body attribute
  document.cookie = `textSize=${size}; path=/; max-age=${60 * 60 * 24 * 30}`; // Save cookie
};

// Load the text size from cookies on mounted
onMounted(() => {
  const cookieValue = document.cookie.split('; ').find(row => row.startsWith('textSize='));
  if (cookieValue) {
    const size = cookieValue.split('=')[1];
    textSize.value = size; // Set text size from cookie
    document.body.setAttribute("data-text-size", size); // Update body attribute
  }
});
</script>
