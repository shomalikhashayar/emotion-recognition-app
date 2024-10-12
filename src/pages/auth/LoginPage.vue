<template>
  <q-page>
    <gradient-with-waves />
    <div class="row items-center justify-center window-height">
      <login />
    </div>
  </q-page>
</template>

<script setup>
import Login from "src/components/login-page/IndexView.vue";
import GradientWithWaves from "components/Animations/GradientWithWaves.vue";
</script>