<template>
  <div class="column q-ml-xl q-pl-xl q-mb-xl q-pb-md">
    <div class="row q-py-md">
      <language-switcher />
    </div>
    <div class="row">
      <q-card class="login-card border-radius-xl">
      <q-card-section horizontal class="no-padding fit">
        <master-section />
        <detail-section />
      </q-card-section>
    </q-card>
    <emotions-list />
    </div>
  </div>
</template>

<script setup>
import MasterSection from "./MasterSection.vue";
import DetailSection from "./DetailSection.vue";
import EmotionsList from "./EmotionsList.vue";
import LanguageSwitcher from "components/shared/LanguageSwitcher.vue";
</script>
