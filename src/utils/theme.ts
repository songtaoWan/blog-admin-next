import type { ITheme } from '@/types/index'
import { defaultTheme } from '@/config/index'
import { getStorage, setStorage } from 'web-storage-plus'

const key = 'theme'

export const setTheme = (theme: ITheme) => {
  document.body.className = theme

  setStorage(key, theme)
}

export const getTheme = () => {
  return getStorage<ITheme>(key) as ITheme || defaultTheme
}

export const initTheme = () => {
  const theme = getTheme()

  document.body.className = theme
}