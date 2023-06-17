<script lang="ts" setup>
import CollapsedButton from '@/components/CollapsedButton/CollapsedButton.vue';
import ScreenFull from '@/components/ScreenFull/ScreenFull.vue';
import SwitchAppearance from '@/components/SwitchAppearance/SwitchAppearance.vue';
</script>

<template>
  <header class="header flex">
    <div class="flex">
      <CollapsedButton />
    </div>
    <div class="flex">
      <ScreenFull />
      <SwitchAppearance />
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