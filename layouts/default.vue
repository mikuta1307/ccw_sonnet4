<!-- layouts/default.vue -->
<template>
  <div class="min-h-screen bg-primary-50">
    <!-- Demo Banner -->
    <div v-if="!demoBannerClosed" style="position: relative; background-color: #f59e0b; color: white; padding: 8px 16px; z-index: 1000; height: 40px; display: flex; align-items: center; margin: 0; border: none;">
      <!-- バナーテキスト -->
      <div style="text-align: center; flex: 1; font-size: 13px; padding-right: 50px;">
        🎭 これはデモ用のポートフォリオサイトです - This is a DEMO portfolio site
      </div>
      
      <!-- 閉じるボタン -->
      <div
        @click="closeBanner"
        style="
          position: fixed;
          top: 8px;
          right: 8px;
          width: 24px; 
          height: 24px; 
          background-color: rgba(255, 255, 255, 0.3);
          color: white; 
          border-radius: 50%; 
          cursor: pointer; 
          display: flex; 
          align-items: center; 
          justify-content: center;
          font-size: 16px;
          font-weight: bold;
          z-index: 99999;
          pointer-events: auto;
        "
        title="閉じる"
        onmouseover="this.style.backgroundColor='rgba(255, 255, 255, 0.5)'; this.style.transform='scale(1.1)'"
        onmouseout="this.style.backgroundColor='rgba(255, 255, 255, 0.3)'; this.style.transform='scale(1)'"
      >
        ×
      </div>
    </div>
    
    <!-- Header -->
    <AppHeader :demo-banner-closed="demoBannerClosed" />
    
    <!-- Main Content -->
    <main>
      <slot />
    </main>
    
    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup>
const demoBannerClosed = ref(false)

const closeBanner = () => {
  demoBannerClosed.value = true
}

// Add robots meta to prevent indexing
useHead({
  meta: [
    { name: 'robots', content: 'noindex, nofollow, noarchive, nosnippet' }
  ]
})
</script>