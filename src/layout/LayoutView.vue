<script lang="ts" setup>
import AsideView from './components/AsideView.vue'
import HeaderView from './components/HeaderView.vue'
import ScrollBar from './components/ScrollBar.vue'
</script>

<template>
  <div class="layout flex">
    <AsideView />
    <div class="layout_container">
      <HeaderView />
      <ScrollBar />
      <div class="layout-main st-transition-bg">
        <router-view v-slot="{ Component }">
          <transition name="slide-fade">
            <KeepAlive>
              <component :is="Component" />
            </KeepAlive>
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  height: 100vh;
}

.layout_container {
  flex: 1;

  .layout-main {
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 80px);
    background-color: var(--st-c-bg-2);
  }
}

/*
  进入和离开动画可以使用不同
  持续时间和速度曲线。
*/
.slide-fade-enter-active {
  animation: slide-in-elliptic-right-fwd 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.slide-fade-leave-active {
  animation: slide-out-elliptic-left-bck 0.7s ease-in both;
}

@keyframes slide-out-elliptic-left-bck {
  0% {
    transform: translateX(0) rotateY(0) scale(1);
    transform-origin: 2000px 50%;
    opacity: 1;
  }
  100% {
    transform: translateX(-1000px) rotateY(30deg) scale(0);
    transform-origin: -100% 50%;
    opacity: 1;
  }
}

@keyframes slide-in-elliptic-right-fwd {
  0% {
    transform: translateX(800px) rotateY(-30deg) scale(0);
    transform-origin: -100% 50%;
    opacity: 0;
  }
  100% {
    transform: translateX(0) rotateY(0) scale(1);
    transform-origin: -1800px 50%;
    opacity: 1;
  }
}
</style>
