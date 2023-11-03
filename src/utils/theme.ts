import type { ITheme } from '@/types/index'
import { getStorage, setStorage } from 'web-storage-plus'
import { defaultTheme } from '@/config/index'

const key = 'theme'

export const setTheme = (theme: ITheme) => {
  document.body.classList.remove('light', 'dark')
  document.body.classList.add(theme)

  setStorage(key, theme)
}

export const getTheme = () => {
  return (getStorage<ITheme>(key) as ITheme) || defaultTheme
}

export const initTheme = () => {
  const theme = getTheme()
  setTheme(theme)
}
