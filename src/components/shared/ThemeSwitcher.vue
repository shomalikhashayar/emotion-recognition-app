<template>
  <div class="row q-gutter-sm">
    <div class="col" v-for="(color, index) in colors" :key="index">
      <q-btn
        unelevated
        class="text-size-16 no-letter-spacing fit border-radius-lg gradient-btn"
        :style="`background: linear-gradient(${color.start}, ${color.end});`"
        padding="20px"
        @click="setTheme(color.name)"
      >
        <q-icon
          color="white"
          name="check"
          size="24px"
          v-if="currentTheme === color.name"
        />
      </q-btn>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const colors = [
  { name: "blue", label: "آبی", start: "#32a2ff", end: "#0082ff" },
  { name: "orange", label: "نارنجی", start: "#FF9800", end: "#ff7600" },
  { name: "green", label: "سبز", start: "#4CAF50", end: "#319900" },
];

const currentTheme = ref("blue");

const setTheme = (color) => {
  currentTheme.value = color;
  document.body.setAttribute("data-theme", color);
  document.cookie = `theme=${color}; path=/; max-age=${60 * 60 * 24 * 30}`;
};

onMounted(() => {
  const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith("theme="));
  if (cookieValue) {
    const theme = cookieValue.split("=")[1];
    currentTheme.value = theme;
    setTheme(theme);
  }
});
</script>
