<template>
  <div class="gradient-background">
    <div class="wave" :style="direction()"></div>
    <div class="wave" :style="direction()"></div>
    <div class="wave" :style="direction()"></div>
  </div>
</template>

<script setup>
import { useQuasar } from "quasar";

const $q = useQuasar();

const direction = () => {
  return "left: 0";
};
</script>

<style lang="scss" scoped>
.gradient-background {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    315deg,
    rgb(255, 85, 0) 3%,
    rgb(255, 153, 69) 38%,
    rgb(255, 85, 0) 68%,
    rgb(255, 132, 0) 98%
  );
  animation: gradient 15s ease infinite;
  background-size: 400% 400%;
}

@keyframes gradient {
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
}

.wave {
  background: rgb(255 255 255 / 25%);
  border-radius: 1000% 1000% 0 0;
  position: fixed;
  width: 200%;
  height: 12em;
  animation: wave 10s -3s linear infinite;
  transform: translate3d(0, 0, 0);
  opacity: 0.8;
  bottom: 0;
  z-index: -1;
}

.wave:nth-of-type(2) {
  bottom: -1.25em;
  animation: wave 18s linear reverse infinite;
  opacity: 0.8;
}

.wave:nth-of-type(3) {
  bottom: -2.5em;
  animation: wave 20s -1s reverse infinite;
  opacity: 0.9;
}

@keyframes wave {
  2% {
    transform: translateX(1);
  }
  25% {
    transform: translateX(-25%);
  }
  50% {
    transform: translateX(-50%);
  }
  75% {
    transform: translateX(-25%);
  }
  100% {
    transform: translateX(1);
  }
}
</style>
