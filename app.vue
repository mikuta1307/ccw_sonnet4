<template>
  <div>
    <!-- デモバナー（×ボタン付き） -->
    <div 
      v-if="!demoBannerClosed"
      class="demo-banner fixed top-0 left-0 w-full bg-accent-500 text-white text-center py-2 px-4 z-50 flex items-center justify-center"
    >
      <span class="text-sm font-medium">
        🎭 これはデモ用のポートフォリオサイトです - 実際のサービスではありません
      </span>
      <button 
        @click="closeDemoBanner"
        class="ml-4 hover:bg-white/20 rounded-full p-1 transition-colors duration-200"
        aria-label="デモバナーを閉じる"
      >
        <X class="w-4 h-4" />
      </button>
    </div>
    
    <!-- ヘッダー -->
    <AppHeader :demo-banner-closed="demoBannerClosed" />
    
    <!-- メインコンテンツ（フェード効果付き） -->
    <div class="page-container" :class="{ 'with-banner': !demoBannerClosed }">
      <NuxtPage :transition="{ name: 'fade', mode: 'out-in' }" />
    </div>
    
    <!-- フッター -->
    <AppFooter />
  </div>
</template>

<script setup>
import { X } from 'lucide-vue-next'

// デモバナーの状態管理
const demoBannerClosed = ref(false)

// デモバナーを閉じる
const closeDemoBanner = () => {
  demoBannerClosed.value = true
}
</script>

<style>
/* デモバナー */
.demo-banner {
  height: 40px;
  transition: all 0.3s ease-in-out;
}

/* ページコンテナ */
.page-container {
  position: relative;
  width: 100%;
  min-height: 100vh;
  transition: margin-top 0.3s ease-in-out;
}

.page-container.with-banner {
  margin-top: 40px; /* デモバナーの高さ分 */
}

/* フェードトランジション */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

/* ページ全体のスクロール位置をリセット */
.fade-enter-active {
  position: relative;
}

/* スムーズスクロール完全無効化 */
* {
  scroll-behavior: auto !important;
}

html, body {
  scroll-behavior: auto !important;
}
</style>