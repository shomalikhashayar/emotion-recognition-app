<template>
  <q-drawer
    overlay
    side="right"
    bordered
    width="350"
    class="q-px-md q-pt-md"
    v-model="store.status.value"
  >
    <div class="row items-cetner justify-between q-mb-md">
      <div class="text-weight-500 text-body1 no-letter-spacing">شخصی سازی</div>
      <div>
        <q-btn
          round
          unelevated
          dense
          size="10px"
          color="negative"
          @click="store.status.value = false"
        >
          <q-icon name="close" size="16px" />
        </q-btn>
      </div>
    </div>

    <q-scroll-area style="height: calc(100% - 120px)">
      <q-card flat bordered class="border-radius-lg">
        <q-card-section>
          <div class="text-body1 text-weight-500">حالت‌های رنگی</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <theme-switcher />
        </q-card-section>
      </q-card>
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
