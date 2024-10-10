<template>
  <q-btn @click="toggleTheme" :label="themeLabel" />
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const themeLabel = computed(() => 
  $q.dark.isActive ? 'Switch to Light Mode' : 'Switch to Dark Mode'
);

const toggleTheme = () => {
  $q.dark.toggle();
  saveThemePreference();
};

const saveThemePreference = () => {
  const isDarkMode = $q.dark.isActive;
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
};

const loadThemePreference = () => {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    $q.dark.set(true);
  } else {
    $q.dark.set(false);
  }
};

onMounted(() => {
  loadThemePreference();
});
</script>
