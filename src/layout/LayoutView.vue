<script lang="ts" setup>
import AsideView from './components/AsideView.vue'
import HeaderView from './components/HeaderView.vue'
</script>

<template>
  <div class="layout flex">
    <AsideView />
    <div class="layout_container">
      <HeaderView />
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  height: 100vh;
}

.layout_container {
  flex: 1;
}
</style>
