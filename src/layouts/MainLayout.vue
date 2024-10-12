<template>
  <q-layout view="hHh Lpr lff">
    <main-header />
    <menu-drawer />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import MainHeader from "src/components/shared/MainHeader.vue";
import MenuDrawer from "src/components/shared/MenuDrawer.vue";
</script>
