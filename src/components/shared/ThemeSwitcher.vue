<template>
  <div class="row q-gutter-sm">
    <div class="col">
      <q-btn
        unelevated
        class="text-size-16 no-letter-spacing full-width border-radius-lg"
        padding="20px"
        color="blue"
        @click="setTheme('blue')"
        >آبی</q-btn
      >
    </div>
    <div class="col">
      <q-btn
        unelevated
        class="text-size-16 no-letter-spacing full-width border-radius-lg"
        padding="20px"
        color="orange"
        @click="setTheme('orange')"
        >نارنجی</q-btn
      >
    </div>
    <div class="col">
      <q-btn
        unelevated
        class="text-size-16 no-letter-spacing full-width border-radius-lg"
        padding="20px"
        color="green"
        @click="setTheme('green')"
        >سبز</q-btn
      >
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

const setTheme = (color) => {
  document.body.setAttribute("data-theme", color);
  document.cookie = `theme=${color}; path=/; max-age=${60 * 60 * 24 * 30}`; // Save cookie for 30 days
};

onMounted(() => {
  const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith("theme="));
  if (cookieValue) {
    const theme = cookieValue.split("=")[1];
    setTheme(theme); // Apply saved theme on mount
  }
});
</script>
