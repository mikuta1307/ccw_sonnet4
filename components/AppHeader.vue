<!-- components/AppHeader.vue -->
<template>
  <header 
    class="fixed w-full transition-all duration-300"
    :style="headerStyle"
  >
    <nav class="container-custom">
      <div class="flex items-center justify-between h-12 md:h-14">
        <!-- Logo -->
        <NuxtLink 
          to="/" 
          class="flex items-center space-x-2 text-primary-800 hover:text-secondary-500 transition-colors duration-300"
        >
          <div class="w-7 h-7 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-lg flex items-center justify-center">
            <PenTool class="w-4 h-4 text-white" />
          </div>
          <span class="hidden sm:block font-accent font-semibold text-base">
            Content Creator's Workshop
          </span>
          <span class="sm:hidden font-accent font-semibold text-base">CCW</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-6">
          <NuxtLink 
            to="/"
            class="nav-link"
            :class="{ 'nav-link-active': route.path === '/' }"
          >
            Home
          </NuxtLink>
          <NuxtLink 
            v-for="item in navigation"
            :key="item.name"
            :to="item.href"
            class="nav-link"
            :class="{ 'nav-link-active': route.path === item.href }"
          >
            {{ item.name }}
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-lg hover:bg-primary-100 transition-colors duration-200"
          :class="{ 'text-secondary-500': mobileMenuOpen }"
        >
          <Menu v-if="!mobileMenuOpen" class="w-5 h-5" />
          <X v-else class="w-5 h-5" />
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div 
      v-show="mobileMenuOpen"
      class="md:hidden bg-white/95 backdrop-blur-sm border-t border-primary-200"
      @click="mobileMenuOpen = false"
    >
      <div class="container-custom py-3">
        <div class="flex flex-col space-y-3">
          <NuxtLink 
            to="/"
            class="block px-3 py-2 text-primary-700 hover:text-secondary-500 hover:bg-primary-50 rounded-lg transition-all duration-200"
          >
            Home
          </NuxtLink>
          <NuxtLink 
            v-for="item in navigation"
            :key="item.name"
            :to="item.href"
            class="block px-3 py-2 text-primary-700 hover:text-secondary-500 hover:bg-primary-50 rounded-lg transition-all duration-200"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { Menu, X, PenTool } from 'lucide-vue-next'

const props = defineProps({
  demoBannerClosed: {
    type: Boolean,
    default: false
  }
})

const scrolled = ref(false)
const mobileMenuOpen = ref(false)

// Get current route
const route = useRoute()

const navigation = [
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' }
]

// Header styling based on banner state
const headerStyle = computed(() => {
  const baseStyle = {
    zIndex: props.demoBannerClosed ? 50 : 40,
    top: props.demoBannerClosed ? '0px' : '40px',
    backgroundColor: scrolled.value ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(8px)',
    boxShadow: scrolled.value ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none'
  }
  return baseStyle
})

// Handle scroll effect
onMounted(() => {
  const handleScroll = () => {
    scrolled.value = window.scrollY > 20
  }
  window.addEventListener('scroll', handleScroll)
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})

// Close mobile menu on route change
watch(() => route.path, () => {
  mobileMenuOpen.value = false
})
</script>

<style scoped>
.nav-link {
  @apply relative text-primary-700 hover:text-secondary-500 font-medium transition-all duration-300 text-sm;
}

.nav-link::after {
  @apply absolute bottom-0 left-0 w-0 h-0.5 bg-secondary-500 transition-all duration-300;
  content: '';
}

.nav-link:hover::after,
.nav-link-active::after {
  @apply w-full;
}

.nav-link-active {
  @apply text-secondary-500;
}
</style>