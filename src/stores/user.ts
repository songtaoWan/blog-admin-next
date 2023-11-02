import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getStorage, setStorage, removeStorage } from 'web-storage-plus'

export const useUserStore = defineStore('user', () => {
  const token = ref('')
  function getToken() {
    return token.value || getStorage('token')
  }
  function setToken(value: string) {
    token.value = value
    setStorage('token', value)
  }
  function removeToken() {
    token.value = ''
    removeStorage('token')
  }

  const userInfo = ref({
    name: '阿Q强国',
    avatar: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
  })

  function login(data: { username: string; password: string; code: string }) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log(data)

        setToken('test login')
        resolve()
      }, 100)
    })
  }
  function logout() {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        removeToken()
        resolve()
      }, 100)
    })
  }

  return {
    token,
    getToken,
    setToken,
    removeToken,
    userInfo,
    login,
    logout
  }
})
