<template>
  <q-card-section class="q-pa-xl q-ma-md col-6 column bg-white">
    <div class="text-h3 text-center text-weight-700 no-letter-spacing">
      ورود
    </div>
    <div class="q-mb-md">
      <div class="q-mb-sm text-body1 text-grey-8 no-letter-spacing">
        ایمیل یا نام کاربری
      </div>
      <q-input outlined rounded v-model="username">
        <template #append>
          <q-icon color="primary" name="mail" class="q-mr-sm" />
        </template>
      </q-input>
    </div>
    <div class="q-mb-lg">
      <div class="q-mb-sm text-body1 text-grey-8 no-letter-spacing">
        رمز عبور
      </div>
      <q-input outlined rounded v-model="password">
        <template #append>
          <q-icon color="primary" name="key" class="q-mr-sm" />
        </template>
      </q-input>
    </div>
    <router-link
      class="no-decoration decoration-on-hover text-body2 text-weight-500 text-primary"
    >
      رمز عبورتان را فراموش کرده‌اید؟
    </router-link>

    <q-btn
      rounded
      unelevated
      color="primary"
      class="full-weight q-pa-md q-mt-xl"
    >
      <span class="text-body1 text-weight-700">ورود</span>
    </q-btn>

    <div class="q-mt-lg text-body2 text-grey-8">
      حساب کاربری ندارید؟
      <router-link
        class="text-body2 text-weight-700 text-primary no-decoration decoration-on-hover"
        >ثبت نام</router-link
      >
    </div>
  </q-card-section>
</template>

<script setup>
import { ref } from "vue";

const username = ref(null);
const password = ref(null);
</script>
