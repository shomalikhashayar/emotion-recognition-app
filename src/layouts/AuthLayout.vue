<template>
  <q-layout view="lHh Lpr lFf">
    <gradient-with-waves />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import GradientWithWaves from "components/Animations/GradientWithWaves.vue";
</script>
