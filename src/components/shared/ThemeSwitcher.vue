<template>
  <div class="row items-center q-gutter-md">
    <div class="col">
      <q-img src="images/day.svg" />
      <q-radio v-model="theme" val="light" label="روز" />
    </div>
    <div class="col">
      <q-img src="images/night.svg" />
      <q-radio v-model="theme" val="dark" label="شب" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();
const theme = ref("");

const themeLabel = computed(() =>
  $q.dark.isActive ? "Switch to Light Mode" : "Switch to Dark Mode"
);

const saveThemePreference = (newTheme) => {
  localStorage.setItem("theme", newTheme);
};

const loadThemePreference = () => {
  const themePreference = localStorage.getItem("theme");
  if (themePreference === "dark") {
    $q.dark.set(true);
    theme.value = "dark";
  } else {
    $q.dark.set(false);
    theme.value = "light";
  }
};

watch(theme, (newTheme) => {
  if (newTheme === "dark") {
    $q.dark.set(true);
  } else {
    $q.dark.set(false);
  }
  saveThemePreference(newTheme);
});

onMounted(() => {
  loadThemePreference();
});
</script>
