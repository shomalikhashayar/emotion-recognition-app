<template>
  <div class="row items-center q-gutter-md">
    <div class="col">
      <q-img
        spinner-color="primary"
        class="border-radius-sm cursor-pointer"
        v-ripple
        src="images/day.svg"
        @click="setTheme('light')"
      />
      <q-radio
        class="text-size-16 q-mt-md"
        dense
        size="36px"
        v-model="theme"
        val="light"
        label="روز"
      />
    </div>
    <div class="col">
      <q-img
        spinner-color="primary"
        class="border-radius-sm cursor-pointer"
        v-ripple
        src="images/night.svg"
        @click="setTheme('dark')"
      />
      <q-radio
        class="text-size-16 q-mt-md"
        dense
        size="36px"
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

const setTheme = (newTheme) => {
  theme.value = newTheme;
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
