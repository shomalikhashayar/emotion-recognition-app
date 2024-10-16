<template>
  <div class="row q-gutter-sm">
    <q-avatar size="36px">
      <img src="https://cdn.quasar.dev/img/avatar1.jpg" alt="" />
    </q-avatar>

    <q-btn-dropdown
      content-class="border-radius-lg"
      :menu-offset="[2, 2]"
      dropdown-icon="o_expand_more"
      padding="0 8px"
      rounded
      dense
      unelevated
      label="خشایار شمالی"
    >
      <q-list style="width: 250px">
        <q-item class="q-py-sm" clickable v-close-popup to="/profile">
          <q-item-section avatar>
            <q-avatar size="36px" class="bg-teritary">
              <q-icon name="o_person" size="24px" />
            </q-avatar>
          </q-item-section>
          <q-item-section class="q-ml-none">
            <q-item-label class="text-size-16">نمایه</q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="q-py-sm" clickable v-close-popup to="/settings">
          <q-item-section avatar>
            <q-avatar size="36px" class="bg-teritary">
              <q-icon name="o_settings" size="24px" />
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>تنظیمات</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator size="0.5px" />

        <q-item class="q-py-sm" clickable v-close-popup to="/account/login">
          <q-item-section avatar>
            <q-avatar size="36px" color="pink-6" text-color="white">
              <q-icon name="o_logout" size="22px" />
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-size-16">خروج</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
</template>

<script setup></script>
