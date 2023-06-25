import axios, { AxiosError, type AxiosResponse } from 'axios'
import { message } from 'ant-design-vue'
import { useUserStore } from '@/stores/user'

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json;'
  }
})

instance.interceptors.request.use(
  (config) => {
    // 如果这里的代码出现错误，会触发响应拦截器（不是请求拦截器）的错误事件
    const store = useUserStore()
    const token = store.token || store.getToken()

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

/**
 * 重新登录
 * @returns
 */
const afreshLogin = (msg: string = 'Error') => {
  message.error(msg)
  const store = useUserStore()
  store.removeToken()

  // 跳转到登录页
  setTimeout(() => {
    const loginUrl = `${location.origin}/admin/login`
    location.href = `${loginUrl}?redirect=${encodeURIComponent(location.href)}`
  }, 3000)

  return Promise.reject(new Error(msg))
}

instance.interceptors.response.use(
  (res: AxiosResponse<{ code: number; msg: string; data: unknown } | Blob, any>) => {
    const data = res.data

    if (data instanceof Blob) {
      return res
    }

    if (data.code !== 200) {
      message.error(data.msg)
      return Promise.reject(new Error(data.msg || 'Error'))
    }

    return res
  },
  (error: AxiosError) => {
    // 处理取消请求错误
    if (error.code === 'ERR_CANCELED') {
      return Promise.reject(error)
    }

    if (error.response?.status === 401 || error.response?.status === 403) {
      return afreshLogin((error.response?.data as { msg: string }).msg)
    }

    // 超出 2xx 范围的http状态码都会触发该函数。包括网络错误和超时
    message.error(error.response?.statusText || error.message)
    return Promise.reject(error)
  }
)

export default instance
