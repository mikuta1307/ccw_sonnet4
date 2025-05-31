<!-- components/ArticleCard.vue -->
<template>
  <div 
    class="card group animate-fade-in bg-white rounded-xl shadow-md hover:ring-4 hover:ring-accent-400 hover:ring-opacity-100 hover:shadow-[0_0_25px_rgba(245,101,101,0.7)] transition-all duration-300 relative z-10"
    :style="`animation-delay: ${animationDelay}s`"
  >
    <!-- Thumbnail - クリック可能 -->
    <NuxtLink :to="articleLink" class="block relative overflow-hidden rounded-t-xl">
      <div class="aspect-video bg-gradient-to-br from-primary-100 via-secondary-100 to-accent-100 flex items-center justify-center transition-transform duration-300 cursor-pointer">
        <!-- Article Icon based on category -->
        <component 
          :is="categoryIcon" 
          class="w-16 h-16 opacity-60"
          :class="categoryColor"
        />
      </div>
      
      <!-- Category Badge -->
      <div class="absolute top-3 left-3">
        <span 
          class="px-2 py-1 rounded-full text-xs font-medium text-white"
          :class="categoryBadgeClass"
        >
          {{ categoryLabel }}
        </span>
      </div>
      
      <!-- Word Count Badge -->
      <div class="absolute top-3 right-3">
        <span class="px-2 py-1 bg-white/90 text-primary-700 rounded-full text-xs font-medium">
          {{ article.wordCount?.toLocaleString() || '---' }}字
        </span>
      </div>
      
      <!-- Hover Overlay -->
      <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
        <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ExternalLink class="w-8 h-8 text-white" />
        </div>
      </div>
    </NuxtLink>
    
    <!-- Content -->
    <div class="p-6">
      <!-- Title -->
      <h3 class="text-xl font-semibold text-primary-800 mb-2 line-clamp-2 group-hover:text-secondary-600 transition-colors duration-300">
        {{ article.title }}
      </h3>
      
      <!-- Description -->
      <p class="text-primary-600 text-sm mb-4 line-clamp-3">
        {{ article.description }}
      </p>
      
      <!-- Meta Info -->
      <div class="space-y-3">
        <!-- Genre Tags -->
        <div v-if="article.genre && article.genre.length > 0" class="flex flex-wrap gap-1">
          <span 
            v-for="genre in article.genre.slice(0, 3)"
            :key="genre"
            class="px-2 py-1 text-xs rounded-full"
            :class="getGenreClass(genre)"
          >
            {{ genre }}
          </span>
        </div>
        
        <!-- Client Type & Date -->
        <div class="flex items-center justify-between text-xs text-primary-500">
          <span v-if="article.clientType" class="flex items-center">
            <Building class="w-3 h-3 mr-1" />
            {{ article.clientType }}
          </span>
          <span v-if="article.publishDate" class="flex items-center">
            <Calendar class="w-3 h-3 mr-1" />
            {{ formatDate(article.publishDate) }}
          </span>
        </div>
      </div>
      
      <!-- Read More Button -->
      <div class="mt-4 pt-4 border-t border-primary-100">
        <NuxtLink 
          :to="articleLink"
          class="inline-flex items-center text-secondary-600 hover:text-secondary-700 text-sm font-medium transition-all duration-300"
        >
          続きを読む
          <ArrowRight class="w-4 h-4 ml-1" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ExternalLink, ArrowRight, Building, Calendar, FileText, Target, BarChart3 } from 'lucide-vue-next'

const props = defineProps({
  article: {
    type: Object,
    required: true
  },
  animationDelay: {
    type: Number,
    default: 0
  }
})

// Article link - 正しいパス生成
const articleLink = computed(() => {
  // Nuxt Contentの_pathは `/articles/xxx` 形式なので、ルート用に変換
  if (props.article._path) {
    // `/articles/xxx` を `/article/xxx` に変換
    return props.article._path.replace('/articles/', '/article/')
  }
  
  // slugがある場合
  if (props.article.slug) {
    return `/article/${props.article.slug}`
  }
  
  // idがある場合（フォールバック）
  if (props.article.id) {
    return `/article/${props.article.id}`
  }
  
  // デフォルト
  console.warn('ArticleCard: リンクを生成できませんでした', props.article)
  return '#'
})

// Category configurations
const categoryConfig = {
  short: {
    label: 'ショート',
    icon: FileText,
    color: 'text-category-short',
    badgeClass: 'bg-category-short'
  },
  medium: {
    label: 'ミディアム', 
    icon: Target,
    color: 'text-category-medium',
    badgeClass: 'bg-category-medium'
  },
  long: {
    label: 'ロング',
    icon: BarChart3,
    color: 'text-category-long',
    badgeClass: 'bg-category-long'
  }
}

// Computed properties
const categoryIcon = computed(() => categoryConfig[props.article.category]?.icon || FileText)
const categoryColor = computed(() => categoryConfig[props.article.category]?.color || 'text-primary-500')
const categoryLabel = computed(() => categoryConfig[props.article.category]?.label || 'その他')
const categoryBadgeClass = computed(() => categoryConfig[props.article.category]?.badgeClass || 'bg-primary-500')

// Genre styling
const getGenreClass = (genre) => {
  const genreStyles = {
    'マーケティング': 'bg-genre-marketing/20 text-genre-marketing',
    'ビジネス': 'bg-genre-business/20 text-genre-business',
    'テクノロジー': 'bg-genre-tech/20 text-genre-tech',
    'ライフスタイル': 'bg-genre-lifestyle/20 text-genre-lifestyle',
    '健康・美容': 'bg-genre-lifestyle/20 text-genre-lifestyle',
    'グルメ・旅行': 'bg-genre-marketing/20 text-genre-marketing',
    '暮らし・生活': 'bg-genre-business/20 text-genre-business',
    '趣味・エンタメ': 'bg-genre-tech/20 text-genre-tech',
    'デジタル戦略': 'bg-genre-tech/20 text-genre-tech'
  }
  return genreStyles[genre] || 'bg-primary-100 text-primary-600'
}

// Date formatting
const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

// Debug info
// onMounted(() => {
//   console.log('🔗 ArticleCard Debug:', {
//     title: props.article.title,
//     _path: props.article._path,
//     slug: props.article.slug,
//     generatedLink: articleLink.value
//   })
// })
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>