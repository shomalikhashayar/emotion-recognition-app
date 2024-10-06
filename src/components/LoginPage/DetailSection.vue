<template>
  <q-card-section class="q-pa-xl col column bg-white">
    <div class="text-h3 text-center text-weight-700">ورود</div>
    <div class="q-mb-md">
      <div class="q-mb-sm text-body1 text-grey-8">ایمیل یا نام کاربری</div>
      <q-input outlined rounded v-model="userName" />
    </div>
    <div class="q-mb-lg">
      <div class="q-mb-sm text-body1 text-grey-8">رمز عبور</div>
      <q-input outlined rounded v-model="password" />
    </div>
    <div class="text-body2 text-weight-500 text-red-6">
      رمز عبورتان را فراموش کرده‌اید؟
    </div>

    <q-btn
      rounded
      unelevated
      color="orange-8"
      class="full-weight q-pa-md q-mt-xl"
    >
      <span class="text-body1 text-weight-700">ورود</span>
    </q-btn>

    <div class="q-mt-lg text-body2 text-grey-8">
      حساب کاربری ندارید؟
      <span class="text-body2 text-weight-700 text-orange-8">ثبت نام</span>
    </div>
  </q-card-section>
</template>

<script setup>
import { ref } from "vue";

const userName = ref(null);
const password = ref(null);
</script>
