<template>
  <q-header
    bordered
    :class="$q.dark.isActive ? 'bg-dark text-white' : 'bg-accent text-dark'"
    unelevated
  >
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

       <div class="row items-center q-gutter-sm">
         <profile />
        <lang-switcher />
        <notification />
       </div>

    </q-toolbar>
  </q-header>
</template>

<script setup>
import { ref } from "vue";
import { useMenuDrawer } from "src/composables/useMenuDrawer";

import LangSwitcher from "src/components/shared/LanguageSwitcher.vue";
import Notification from "src/components/shared/ToolbarNotification.vue";
import Profile from "src/components/shared/ToolbarProfile.vue";
import ThemeSwitcher from "src/components/shared/DarkModeSwitcher.vue";

const store = useMenuDrawer();
</script>
