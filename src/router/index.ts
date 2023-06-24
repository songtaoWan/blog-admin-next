import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import NotFound from '@/views/NotFound.vue'
import LayoutView from '@/layout/LayoutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/',
      component: LayoutView,
      meta: {
        title: '首页'
      },
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/home/HomeView.vue'),
          meta: {
            title: '首页'
          }
        },
        {
          path: 'userinfo',
          name: 'UserInfo',
          component: () => import('@/views/userinfo/UserInfo.vue'),
          meta: {
            title: '个人中心'
          }
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound
    }
  ]
})

export default router
