<template>
  <q-drawer
    side="left"
    id="menu"
    bordered
    width="260"
    class="drawer-gradient q-px-md q-pt-md"
    v-model="store.status.value"
  >
    <q-item
      id="menu-item"
      dense
      class="q-mb-xs border-radius-xl"
      active-class="text-black q-mb-sm active-gradient"
      style="padding-top: 4px; padding-bottom: 4px"
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

      <q-item-section class="text-size-16 no-letter-spacing">
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
