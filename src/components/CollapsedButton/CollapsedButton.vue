<script lang="ts" setup>
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons-vue'
import { useSettingStore } from '@/stores/setting'
import { storeToRefs } from 'pinia'

const setStore = useSettingStore()
const { toggleCollapsed } = setStore
const { collapsed } = storeToRefs(setStore)
</script>

<template>
  <div class="collapsed px-5">
    <menu-fold-outlined v-show="!collapsed" @click="toggleCollapsed" />
    <menu-unfold-outlined v-show="collapsed" @click="toggleCollapsed" />
  </div>
</template>

<style lang="scss" scoped>
.collapsed {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: var(--bg-top-menuColor);
}
</style>