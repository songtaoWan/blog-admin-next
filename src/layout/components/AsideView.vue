<script lang="ts" setup>
import { Menu as AMenu } from 'ant-design-vue'
import { reactive, watch, h } from 'vue'
import {
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined
} from '@ant-design/icons-vue'
import { useSettingStore } from '@/stores/setting'
import { storeToRefs } from 'pinia'

const setStore = useSettingStore()
const { collapsed } = storeToRefs(setStore)

const state = reactive<{ selectedKeys: string[]; openKeys: string[]; preOpenKeys: string[] }>({
  selectedKeys: ['1'],
  openKeys: [],
  preOpenKeys: []
})
const items = reactive([
  {
    key: '1',
    icon: () => h(PieChartOutlined),
    label: 'Option 1'
  },
  {
    key: '2',
    icon: () => h(DesktopOutlined),
    label: 'Option 2'
  },
  {
    key: '3',
    icon: () => h(InboxOutlined),
    label: 'Option 3'
  },
  {
    key: 'sub1',
    icon: () => h(MailOutlined),
    label: 'Navigation One',
    children: [
      {
        key: '5',
        label: 'Option 5'
      },
      {
        key: '6',
        label: 'Option 6'
      },
      {
        key: '7',
        label: 'Option 7'
      },
      {
        key: '8',
        label: 'Option 8'
      }
    ]
  },
  {
    key: 'sub2',
    icon: () => h(AppstoreOutlined),
    label: 'Navigation Two',
    children: [
      {
        key: '9',
        label: 'Option 9'
      },
      {
        key: '10',
        label: 'Option 10'
      },
      {
        key: 'sub3',
        label: 'Submenu',
        children: [
          {
            key: '11',
            label: 'Option 11'
          },
          {
            key: '12',
            label: 'Option 12'
          }
        ]
      }
    ]
  }
])
watch(
  () => state.openKeys,
  (_val, oldVal) => {
    state.preOpenKeys = oldVal
  }
)
watch(
  () => collapsed,
  (val) => {
    state.openKeys = val ? [] : state.preOpenKeys
  }
)
</script>

<template>
  <aside class="layout_aside" :class="collapsed ? 'w-80' : ''">
    <a-menu
      v-model:openKeys="state.openKeys"
      v-model:selectedKeys="state.selectedKeys"
      mode="inline"
      :inline-collapsed="collapsed"
      :items="items"
    ></a-menu>
  </aside>
</template>

<style lang="scss" scoped>
.layout_aside {
  overflow-y: auto;
  width: 220px;
  height: 100vh;
  border-right: 1px solid var(--st-c-divider);
  transition: width 0.3s cubic-bezier(0.2, 0, 0, 1) 0s;

  &::-webkit-scrollbar {
    display: none;
  }
}

.w-80 {
  width: 80px;
}

:deep(.ant-menu) {
  height: 100%;
  transition: background 0.5s, width 0.5s cubic-bezier(0.2, 0, 0, 1) 0s;
}

:deep(.ant-menu-light.ant-menu-root.ant-menu-inline) {
  border-inline-end: none;
}

:deep(.ant-menu-light .ant-menu-item-selected) {
  background-color: var(--st-c-menu-checked);
}

:deep(.ant-menu-light:not(.ant-menu-horizontal) .ant-menu-item:not(.ant-menu-item-selected):hover) {
  background-color: var(--st-c-menu-active);
}

:deep(.ant-menu-light:not(.ant-menu-horizontal) .ant-menu-submenu-title:hover) {
  background-color: var(--st-c-menu-active);
  color: var(--st-c-text-1);
}

:deep(
    .ant-menu-light
      .ant-menu-item:hover:not(.ant-menu-item-selected):not(.ant-menu-submenu-selected),
    .ant-menu-light
      .ant-menu-submenu-title:hover:not(.ant-menu-item-selected):not(.ant-menu-submenu-selected)
  ) {
  color: none;
}

:deep(
    .ant-menu-light
      .ant-menu-item:hover:not(.ant-menu-item-selected):not(.ant-menu-submenu-selected),
    .ant-menu-light
      .ant-menu-submenu-title:hover:not(.ant-menu-item-selected):not(.ant-menu-submenu-selected)
  ) {
  color: var(--st-c-text-1);
}

:deep(.ant-menu-light.ant-menu-inline .ant-menu-sub.ant-menu-inline) {
  background: var(--st-c-menu-bg);
}

:deep(.ant-menu-light.ant-menu-root.ant-menu-vertical) {
  border-inline-end: none;
}
</style>
