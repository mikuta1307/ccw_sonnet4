<!-- components/AppFooter.vue -->
<template>
  <footer class="bg-primary-800 text-white">
    <!-- Main Footer -->
    <div class="container-custom py-12">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Brand -->
        <div class="lg:col-span-2">
          <div class="flex items-center space-x-2 mb-4">
            <div class="w-8 h-8 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-lg flex items-center justify-center">
              <PenTool class="w-5 h-5 text-white" />
            </div>
            <span class="font-accent font-semibold text-xl">Content Creator's Workshop</span>
          </div>
          
          <p class="text-primary-300 leading-relaxed mb-6 max-w-md">
            プロフェッショナルなライティングサービスで、
            あなたのビジネスに価値あるコンテンツを提供します。
          </p>
          
          <div class="demo-badge bg-accent-500/20 text-accent-300">
            🎭 これはデモサイトです
          </div>
        </div>
        
        <!-- Quick Links -->
        <div>
          <h3 class="font-semibold text-lg mb-4">ナビゲーション</h3>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.name">
              <NuxtLink 
                :to="link.href"
                class="text-primary-300 hover:text-white transition-colors duration-300 flex items-center group"
              >
                <ChevronRight class="w-4 h-4 mr-1 group-hover:translate-x-1 transition-transform duration-300" />
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        
        <!-- Categories -->
        <div>
          <h3 class="font-semibold text-lg mb-4">記事カテゴリー</h3>
          <ul class="space-y-2">
            <li v-for="category in categories" :key="category.name">
              <NuxtLink 
                :to="category.href"
                class="text-primary-300 hover:text-white transition-colors duration-300 flex items-center justify-between group"
              >
                <span class="flex items-center">
                  <div class="w-2 h-2 rounded-full mr-2" :class="category.color"></div>
                  {{ category.name }}
                </span>
                <span class="text-xs opacity-75">{{ category.count }}</span>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
    <!-- Bottom Footer -->
    <div class="border-t border-primary-700">
      <div class="container-custom py-6">
        <div class="flex flex-col md:flex-row items-center justify-between">
          <!-- Copyright -->
          <div class="text-primary-400 text-sm mb-4 md:mb-0">
            © 2024 Content Creator's Workshop - Demo Portfolio. All rights reserved.
          </div>
          
          <!-- Social Links -->
          <div class="flex items-center space-x-4">
            <a 
              v-for="social in socialLinks" 
              :key="social.name"
              :href="social.href"
              class="w-10 h-10 bg-primary-700 hover:bg-secondary-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              :title="social.name"
            >
              <component :is="social.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <!-- Demo Notice -->
        <div class="mt-6 pt-6 border-t border-primary-700">
          <div class="bg-accent-500/10 border border-accent-500/20 rounded-lg p-4 text-center">
            <div class="flex items-center justify-center mb-2">
              <AlertTriangle class="w-5 h-5 text-accent-400 mr-2" />
              <span class="text-accent-300 font-medium">デモサイトについて</span>
            </div>
            <p class="text-primary-300 text-sm">
              このサイトはポートフォリオのデモンストレーション用です。
              実際のライティングサービスは提供しておりません。
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { PenTool, ChevronRight, Github, Linkedin, Mail, Twitter, AlertTriangle } from 'lucide-vue-next'

const quickLinks = [
  { name: 'ホーム', href: '/' },
  { name: 'ポートフォリオ', href: '/portfolio' },
  { name: 'アバウト', href: '/about' },
  { name: 'お問い合わせ', href: '/contact' }
]

const categories = [
  { 
    name: 'ショート記事', 
    href: '/portfolio', 
    count: '2',
    color: 'bg-category-short'
  },
  { 
    name: 'ミディアム記事', 
    href: '/portfolio', 
    count: '2',
    color: 'bg-category-medium'
  },
  { 
    name: 'ロング記事', 
    href: '/portfolio', 
    count: '2',
    color: 'bg-category-long'
  }
]

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com',
    icon: Github
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: Linkedin
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com',
    icon: Twitter
  },
  {
    name: 'Email',
    href: 'mailto:demo@example.com',
    icon: Mail
  }
]
</script>