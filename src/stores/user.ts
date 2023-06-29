import { defineStore } from "pinia";
import { ref } from 'vue'
import { getStorage, setStorage, removeStorage } from "web-storage-plus";

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

  function login(data: {username: string; password: string; code: string;}) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log(data)

        setToken('test login')
        resolve()
      }, 100)
    })
  }
  function logout() {
    removeToken()
  }

  return {
    token,
    getToken,
    setToken,
    removeToken,
    login,
    logout
  }
})