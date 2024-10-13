<template>
  <div class="row items-center q-gutter-md">
    <div class="col">
      <q-img src="images/day.svg" />
      <q-radio
        class="text-body2 q-mt-md"
        dense
        size="40px"
        v-model="theme"
        val="light"
        label="روز"
      />
    </div>
    <div class="col">
      <q-img src="images/night.svg" />
      <q-radio
        class="text-body2 q-mt-md"
        dense
        size="40px"
        v-model="theme"
        val="dark"
        label="شب"
      />
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

const toggleTheme = () => {
  $q.dark.toggle();
  saveThemePreference();
};

const saveThemePreference = () => {
  const isDarkMode = $q.dark.isActive;
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
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

// Watch for changes in theme and update the Quasar dark mode accordingly
watch(theme, (newTheme) => {
  if (newTheme === "dark") {
    $q.dark.set(true);
  } else {
    $q.dark.set(false);
  }
});

onMounted(() => {
  loadThemePreference();
});
</script>
