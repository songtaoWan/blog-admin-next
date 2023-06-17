import '@/assets/styles/base.css'
import '@/assets/styles/reset-menu.css'
import 'tailwindcss/tailwind.css'
import { initTheme } from './utils/theme'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

initTheme()
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
