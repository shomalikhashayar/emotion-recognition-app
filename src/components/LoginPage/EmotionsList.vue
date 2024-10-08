<template>
  <div class="column q-gutter-sm q-pl-md">
    <q-btn
      align="left"
      color="white"
      text-color="dark"
      no-caps
      v-for="item in store.emotionsList.value"
      :key="item.name"
      @click="selectEmotion(item.name)"
      class="border-radius-xl"
      padding="8px 12px"
    >
      <q-btn
        size="8px"
        round
        class="no-pointer-events"
        :color="item.color"
        name="circle"
      />
      <span class="q-ml-sm">{{ $t(`login.emotions.${item.name}`) }}</span>
    </q-btn>
  </div>
</template>

<script setup>
import { useLoginEmotions } from "src/composables/useLoginEmotions";

const store = useLoginEmotions();

const selectEmotion = (emotionName) => {
  store.changeCurrentImage(emotionName);
};
</script>
