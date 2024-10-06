<template>
  <q-card class="login-card border-radius-xl">
    <q-card-section horizontal class="no-padding fit">
      <detail-section />
      <master-section />
    </q-card-section>
  </q-card>
</template>

<script setup>
import MasterSection from "./MasterSection.vue";
import DetailSection from "./DetailSection.vue";
</script>
