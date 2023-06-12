<script lang="ts" setup>
import AsideView from './components/AsideView.vue';
</script>

<template>
  <div class="layout">
    <AsideView />
    <div class="layout_container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  display: flex;
}
</style>
