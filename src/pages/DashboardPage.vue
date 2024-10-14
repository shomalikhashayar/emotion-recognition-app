<template>
  <q-input v-model="text" outlined />

  <div class="text-size-21">
    This is title
  </div>
  <div class="text-size-16">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
    voluptatibus inventore porro consequuntur neque nobis dolorum quaerat,
    aliquam consequatur nulla distinctio minus omnis reprehenderit libero
    similique! Distinctio voluptatum eius soluta!
  </div>
</template>

<script setup>
import { ref } from "vue";
import ThemeSwitcher from "src/components/shared/ThemeSwitcher.vue";

const text = ref("");
</script>
