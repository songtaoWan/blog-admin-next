<script lang="ts" setup>
import ButtonCollapsed from '@/components/ButtonCollapsed/ButtonCollapsed.vue';
import ScreenFull from '@/components/ScreenFull/ScreenFull.vue';
import SwitchAppearance from '@/components/SwitchAppearance/SwitchAppearance.vue';
import HeaderAvatar from './HeaderAvatar.vue';
</script>

<template>
  <header class="header flex">
    <div class="flex">
      <ButtonCollapsed />
    </div>
    <div class="flex">
      <ScreenFull />
      <SwitchAppearance />
      <HeaderAvatar />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  align-items: center;
  justify-content: space-between;
  height: 50px;
  border-bottom: 1px solid var(--st-c-divider);
}
</style>