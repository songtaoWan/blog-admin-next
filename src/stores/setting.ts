import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSettingStore = defineStore('setting', () => {
  /**
   * 网站主题
   */
  const theme = ref<'light' | 'dark'>('dark')
  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }

  /**
   * 侧边栏是否折叠
   */
  const collapsed = ref(true)
  function toggleCollapsed() {
    collapsed.value = !collapsed.value
  }

  return {
    theme,
    toggleTheme,
    collapsed,
    toggleCollapsed
  }
})