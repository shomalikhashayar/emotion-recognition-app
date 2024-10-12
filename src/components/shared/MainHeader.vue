<template>
  <q-header bordered class="text-dark bg-accent" unelevated>
    <q-toolbar class="q-py-sm">
      <q-btn
        flat
        round
        dense
        icon="menu"
        class="q-mr-sm"
        @click="store.toggle"
      />
      <q-avatar color="dark">
        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
      </q-avatar>

      <q-toolbar-title>هیجان یار</q-toolbar-title>

      <theme-switcher />
    </q-toolbar>
  </q-header>
</template>

<script setup>
import { ref } from "vue";
import { useMenuDrawer } from "src/composables/useMenuDrawer";

import ThemeSwitcher from "src/components/shared/ThemeSwitcher.vue";

const store = useMenuDrawer();
</script>
