<script lang="ts" setup>
import IconSun from '../icons/IconSun.vue'
import IconMoon from '../icons/IconMoon.vue'
import { useSettingStore } from '@/stores/setting'
import { storeToRefs } from 'pinia'

const setStore = useSettingStore()
const { toggleTheme } = setStore
const { theme } = storeToRefs(setStore)
</script>

<template>
  <button class="switch-appearence">
    <span
      class="switch-check"
      :class="theme === 'dark' ? 'switch-check--active' : ''"
      @click="toggleTheme"
    >
      <span class="switch-icon">
        <IconSun v-show="theme === 'light'" />
        <IconMoon v-show="theme === 'dark'" />
      </span>
    </span>
  </button>
</template>

<style lang="scss" scoped>
.switch-appearence {
  position: relative;
  border-radius: 11px;
  display: block;
  width: 40px;
  height: 22px;
  flex-shrink: 0;
  border: 1px solid var(--st-c-divider);
  background-color: var(--st-c-bg-mute);
  transition: border-color 0.25s, background-color 0.25s;

  &:hover {
    border-color: var(--st-c-gray);
  }

  .switch-check {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 1px;
    left: 1px;
    width: 18px;
    height: 18px;
    color: var(--st-c-text-1);
    border-radius: 50%;
    background-color: var(--st-c-bg);
    box-shadow: var(--st-shadow-1);
    transition: all 0.25s;
  }

  .switch-check--active {
    transform: translateX(18px);
  }

  .vt-switch-icon {
    position: relative;
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    overflow: hidden;
  }
}
</style>
