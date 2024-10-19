<template>
  <q-layout class="main-layout" view="hHr LpR ffr">
    <main-header />
    <menu-drawer />
    <customization-drawer />
    <customization-btn />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import MainHeader from "src/components/MainLayout/MainHeader.vue";
import MenuDrawer from "src/components/MainLayout/MenuDrawer.vue";
import CustomizationDrawer from "src/components/MainLayout/CustomizationDrawer.vue";
import CustomizationBtn from "src/components/MainLayout/customizationBtn.vue";
</script>

<style lang="scss">
.main-layout {
  padding: 36px !important;
}
</style>
