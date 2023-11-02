import type { ITheme } from '@/types/index'
import { getStorage, setStorage } from 'web-storage-plus'
import { getSystemTheme } from './index'
import { defaultTheme } from '@/config/index'

const key = 'theme'

export const setTheme = (theme: ITheme) => {
  document.body.className = theme

  setStorage(key, theme)
}

export const getTheme = () => {
  return (getStorage<ITheme>(key) as ITheme) || defaultTheme
}

export const initTheme = () => {
  const theme = getSystemTheme((mode) => {
    setTheme(mode)
  })

  setTheme(theme)
}
