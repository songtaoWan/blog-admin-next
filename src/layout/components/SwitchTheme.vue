<script lang="ts" setup>
import BaseSwitch from '@/components/BaseSwitch/index.vue'
import { useSettingStore } from '@/stores/setting'

const setStore = useSettingStore()
const { toggleTheme, theme } = setStore  // theme 不需要保持响应式
</script>

<template>
  <BaseSwitch :checked="theme === 'dark'" :delay="300" @onChange="toggleTheme" />
</template>

<style lang="scss" scoped></style>
