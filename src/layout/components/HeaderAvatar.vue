<script lang="ts" setup>
import { Dropdown as ADropdown, Menu as AMenu, MenuItem as AMenuItem } from 'ant-design-vue'
import { DownOutlined } from '@ant-design/icons-vue'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()
const logout = () => {
  userStore.logout().then(() => {
    router.push({
      path: '/login',
      query: {
        redirect: router.currentRoute.value.fullPath
      }
    })
  })
}
</script>

<template>
  <a-dropdown placement="bottom" arrow>
    <div class="px-5 flex items-center">
      <div>
        <img
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          alt=""
          class="avatar"
        />
      </div>
      <div class="name">阿Q强国</div>
      <DownOutlined :style="{ fontSize: '14px', color: 'var(--st-c-icon)' }" />
    </div>
    <template #overlay>
      <a-menu>
        <a-menu-item>
          <a href="javascript:;">代码仓库</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;">个人中心</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;" @click="logout">退出登录</a>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<style lang="scss" scoped>
.avatar {
  width: 25px;
  height: 25px;
  border-radius: 50%;
}

.name {
  margin: 0 4px;
  color: var(--st-c-text-2);
  font-size: 14px;
}
</style>
