<template>
  <q-drawer class="q-px-md q-pt-md" v-model="store.status.value">
    <q-item
      class="q-mb-xs border-radius-xl"
      active-class="text-black q-mb-sm bg-orange-2"
      clickable
      v-for="item in data"
      :key="item.to"
      :to="item.to"
    >
      <q-item-section avatar>
        <q-avatar size="36px" color="primary">
          <q-icon size="20px" color="white" :name="`o_${item.icon}`" />
        </q-avatar>
      </q-item-section>

      <q-item-section class="text-body2 no-letter-spacing">
        {{ item.persianName }}
      </q-item-section>
    </q-item>
  </q-drawer>
</template>

<script setup>
import { useMenuDrawer } from "src/composables/useMenuDrawer";

const store = useMenuDrawer();

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
