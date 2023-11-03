<script lang="ts" setup>
import BaseSwitch from '@/components/BaseSwitch/index.vue'
import { useSettingStore } from '@/stores/setting'
import { computed } from 'vue'

const setStore = useSettingStore()
const { toggleTheme, followSystemTheme } = setStore
followSystemTheme()

const checked = computed(() => setStore.theme === 'dark')
</script>

<template>
  <BaseSwitch :checked="checked" :delay="300" @onChange="toggleTheme" />
</template>

<style lang="scss" scoped></style>
