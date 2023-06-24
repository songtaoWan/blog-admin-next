<script lang="ts" setup>
import TagLink from '@/components/TagLink/TagLink.vue'
import { CloseOutlined } from '@ant-design/icons-vue'
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { throttle } from '@/utils/index'

const scrollElement = ref<HTMLElement | null>(null)
const onWheel = throttle((e: WheelEvent) => {
  scrollElement.value!.scrollLeft += e.deltaY * 0.5
}, 100)

const route = useRoute()
const tags = ref<{ title: string; path: string; checked?: boolean; hiddenIcon?: boolean }[]>([
  { title: '首页', path: '/', hiddenIcon: true }
])
watch(
  () => route.path,
  (path) => {
    tags.value.forEach((item) => {
      item.checked = false
    })

    const tag = tags.value.find((item) => item.path === path || item.title === route.meta.title)
    if (tag) {
      tag.checked = true
      return
    }

    const title = (route.meta.title as string) || (route.name as string)
    tags.value.push({
      title,
      path: route.fullPath,
      checked: true
    })
  },
  {
    immediate: true
  }
)

const router = useRouter()
const onClose = (index: number) => {
  const tag = tags.value.splice(index, 1)

  if (tag[0].checked) {
    const lastTag = tags.value[index - 1]
    if (lastTag) {
      lastTag.checked = true
      router.push(lastTag.path)
    }
  }
}
</script>

<template>
  <div ref="scrollElement" class="scrollbar-wrap" @wheel="onWheel">
    <div class="scrollbar flex">
      <TagLink
        v-for="(item, idx) in tags"
        :key="item.path"
        :title="item.title"
        :checked="item.checked"
        :path="item.path"
      >
        <div
          v-if="!item.hiddenIcon"
          class="icon--close"
          @click.stop="onClose(idx)"
        >
          <CloseOutlined />
        </div>
      </TagLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.scrollbar-wrap {
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 0px;
  }
}

.scrollbar {
  padding-top: 4px;
  width: 100%;
  height: 30px;
  border-bottom: 1px solid var(--st-c-divider);

  .icon--close {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
    width: 14px;
    height: 14px;
    border-radius: 50%;

    &:hover {
      color: var(--st-c-text-3);
      background-color: #79bbff;
    }
  }
}
</style>
