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
      <div class="text-weight-500 text-size-16 no-letter-spacing">
        شخصی سازی
      </div>
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
      <div class="q-gutter-y-md">
        <q-card flat bordered class="border-radius-lg">
          <q-card-section>
            <div class="text-size-16 text-weight-500">حالت‌های رنگی</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <dark-mode-switcher />
          </q-card-section>
        </q-card>

        <q-card flat bordered class="border-radius-lg">
          <q-card-section>
            <div class="text-size-16 text-weight-500">انتخاب رنگ</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <theme-switcher />
          </q-card-section>
        </q-card>

        <q-card flat bordered class="border-radius-lg">
          <q-card-section>
            <div class="text-size-16 text-weight-500">اندازه متن</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <text-size-switcher />
          </q-card-section>
        </q-card>
      </div>
    </q-scroll-area>
  </q-drawer>
</template>

<script setup>
import { ref } from "vue";
import { useCustomizationDrawer } from "src/composables/useCustomizationDrawer";

import DarkModeSwitcher from "src/components/shared/DarkModeSwitcher.vue";
import ThemeSwitcher from "src/components/shared/ThemeSwitcher.vue";
import TextSizeSwitcher from "src/components/shared/TextSizeSwitcher.vue";

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
