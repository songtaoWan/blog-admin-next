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

  return {
    token,
    getToken,
    setToken,
    removeToken
  }
})