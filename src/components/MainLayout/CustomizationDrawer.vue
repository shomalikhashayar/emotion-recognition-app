<template>
  <q-drawer
    side="right"
    bordered
    width="350"
    class="drawer-gradient q-px-md q-pt-md"
    v-model="store.status.value"
  >
    <q-scroll-area style="height: calc(100% - 120px)">
      <theme-switcher />
    </q-scroll-area>
  </q-drawer>
</template>

<script setup>
import { ref } from "vue";
import { useCustomizationDrawer } from "src/composables/useCustomizationDrawer";

import ThemeSwitcher from "src/components/shared/ThemeSwitcher.vue";

const store = useCustomizationDrawer();

const data = [
  {
    name: "Dashboard",
    persianName: "پیشخوان",
    to: "dashboard",
    icon: "dashboard",
  },
  {
    name: "Image",
    persianName: "تصویر",
    to: "image",
    icon: "image",
  },
  {
    name: "Video",
    persianName: "ویدئو",
    to: "video",
    icon: "videocam",
  },
  {
    name: "EEG",
    persianName: "الکتروانسفالوگرافی",
    to: "eeg",
    icon: "support_agent",
  },
];
</script>
