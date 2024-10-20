<template>
  <q-page-sticky style="z-index: 1" position="right" :offset="[-68, 500]">
    <q-btn
      unelevated
      :ripple="false"
      class="customize no-letter-spacing rotate-90"
      padding="12px 24px"
      @click="store.toggle"
      :class="$q.dark.isActive ? 'bg-dark' : 'bg-white'"
    >
      <div class="flex items-center">
        <div>
          <q-avatar size="24px" class="q-mr-md">
            <img src="/icons/color-wheel.svg" alt="" />
          </q-avatar>
        </div>
        <span class="text-body1 no-letter-spacing text-weight-300"
          >شخصی سازی</span
        >
      </div>
    </q-btn>
  </q-page-sticky>
</template>

<script setup>
import { useCustomizationDrawer } from "src/composables/useCustomizationDrawer";

const store = useCustomizationDrawer();
</script>

<style lang="scss">
body.english {
  .customize {
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    border-top-left-radius: 0;
  }
}

body.persian {
  .customize {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }
}

.body--dark {
  .customize {
    border: 1px solid #ffffff20;
  }
}

.body--light {
  .customize {
    border: 1px solid #00000020;
  }
}
</style>
