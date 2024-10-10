<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="text-dark bg-accent" elevated>
      <q-toolbar>
        <q-btn
          flat
          round
          dense
          icon="menu"
          class="q-mr-sm"
          @click="toggleDrawer"
        />
        <q-avatar color="dark">
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
        </q-avatar>

        <q-toolbar-title>هیجان یار</q-toolbar-title>

        <theme-switcher />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer">
      <q-item clickable v-for="n in 5" :key="n">This is a test.</q-item>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import ThemeSwitcher from "src/components/shared/ThemeSwitcher.vue";

const drawer = ref(false);

const toggleDrawer = () => {
  drawer.value = !drawer.value;
};
</script>
