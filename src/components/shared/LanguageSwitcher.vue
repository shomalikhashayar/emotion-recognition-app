<template>
    <q-btn
      style="width: 100px"
      class="text-body1 text-white no-letter-spacing"
      padding="6px 16px"
      rounded
      outline
      unelevated
      v-if="lang === 'fa-IR'"
      @click="onLanguageChange"
    >
      فارسی
    </q-btn>

    <q-btn
      style="width: 100px"
      class="text-body1 text-white no-letter-spacing"
      padding="6px 16px"
      rounded
      outline
      unelevated
      v-else
      @click="onLanguageChange"
    >
      English
    </q-btn>
</template>

<script setup>
import { useQuasar, Quasar, LocalStorage } from "quasar";
import { ref, watch, onMounted } from "vue";
import { useI18n } from "vue-i18n";

const $t = useI18n();

const qLangList = import.meta.glob(
  "/node_modules/quasar/lang/(en-US|fa-IR).mjs"
);

const $q = useQuasar();
const lang = ref(LocalStorage.getItem("selectedLanguage") || $q.lang.isoName);

const selectedLanguageClass =
  LocalStorage.getItem("selectedLanguageClass") ||
  (lang.value === "fa-IR" ? "persian" : "english");
const bodyClass = ref(selectedLanguageClass);

watch(lang, (val) => {
  setLang(val);
});

watch(bodyClass, (val) => {
  document.body.classList.remove("persian", "english");
  document.body.classList.add(val);
  LocalStorage.set("selectedLanguageClass", val);
});

async function setLang(iso) {
  try {
    const langModule = await qLangList[
      `/node_modules/quasar/lang/${iso}.mjs`
    ]();
    Quasar.lang.set(langModule.default);
    $t.locale.value = lang.value;
    LocalStorage.set("selectedLanguage", iso);
    bodyClass.value = iso === "fa-IR" ? "persian" : "english";
  } catch (error) {
    console.log("error setLang", error);
  }
}

const onLanguageChange = () => {
  lang.value = lang.value === "fa-IR" ? "en-US" : "fa-IR";
};

onMounted(() => {
  document.body.classList.remove("persian", "english");
  document.body.classList.add(bodyClass.value);
});

setLang(lang.value);
</script>
