import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getTheme, setTheme } from '@/utils/theme'

export const useSettingStore = defineStore('setting', () => {
  /**
   * 网站主题
   */
  const theme = ref(getTheme())
  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'

    setTheme(theme.value)
  }

  /**
   * 侧边栏是否折叠
   */
  const collapsed = ref(false)
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
