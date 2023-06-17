import type { ITheme } from '@/types/index'
import { defaultTheme } from '@/config/index'
import { getStorage, setStorage } from '@/utils/storage'

const key = 'theme'

export const setTheme = (theme: ITheme) => {
  document.body.className = theme

  setStorage({ key, value: theme })
}

export const getTheme = () => {
  return getStorage<ITheme>(key) || defaultTheme
}

export const initTheme = () => {
  const theme = getTheme()

  document.body.className = theme
}