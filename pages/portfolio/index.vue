<!-- pages/portfolio/index.vue -->
<template>
  <div class="min-h-screen pt-20 md:pt-24">
    <!-- Page Header -->
    <section class="bg-gradient-to-r from-primary-800 to-secondary-600 py-16">
      <div class="container-custom">
        <!-- Breadcrumb -->
        <nav class="mb-6">
          <ol class="flex items-center space-x-2 text-sm text-primary-200">
            <li>
              <NuxtLink to="/" class="hover:text-white transition-colors">ホーム</NuxtLink>
            </li>
            <li><ChevronRight class="w-4 h-4" /></li>
            <li class="text-white">ポートフォリオ</li>
          </ol>
        </nav>
        
        <div class="animate-fade-in">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
            制作実績
          </h1>
          <p class="text-xl text-primary-100 max-w-2xl">
            様々なクライアントワークを想定した記事制作事例をご覧ください
          </p>
        </div>
      </div>
    </section>

    <!-- Loading State -->
    <div v-if="pending" class="flex items-center justify-center py-32">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="text-center py-32">
      <div class="text-red-600 mb-4">
        <p class="text-lg font-semibold">記事の読み込みに失敗しました</p>
        <p class="text-sm">{{ error.message }}</p>
      </div>
      <button @click="refresh()" class="btn-primary">
        再読み込み
      </button>
    </div>

    <!-- Content -->
    <template v-else>
      <!-- Category Filter -->
      <section class="bg-white shadow-sm sticky top-16 md:top-20 z-40">
        <div class="container-custom py-6">
          <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <!-- Category Tabs -->
            <div class="flex flex-wrap gap-2">
              <button
                v-for="category in categories"
                :key="category.key"
                @click="activeCategory = category.key"
                class="category-tab"
                :class="activeCategory === category.key ? 'category-tab-active' : 'category-tab-inactive'"
              >
                <component :is="category.icon" class="w-4 h-4 mr-2" />
                {{ category.name }}
                <span class="category-badge" :class="category.badgeClass">
                  {{ category.count }}
                </span>
              </button>
            </div>
            
            <!-- Results Count -->
            <div class="text-sm text-primary-600">
              {{ filteredArticles.length }}件の記事
            </div>
          </div>
        </div>
      </section>

      <!-- Articles Grid -->
      <section class="section-padding bg-primary-50">
        <div class="container-custom">
          <!-- Articles -->
          <div v-if="filteredArticles.length > 0" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ArticleCard 
              v-for="(article, index) in paginatedArticles" 
              :key="article._path"
              :article="article"
              :animation-delay="index * 0.05"
            />
          </div>
          
          <!-- Empty State -->
          <div v-else class="text-center py-16">
            <div class="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search class="w-12 h-12 text-primary-400" />
            </div>
            <h3 class="text-xl font-semibold text-primary-800 mb-2">記事が見つかりません</h3>
            <p class="text-primary-600">選択されたカテゴリーに該当する記事はありません。</p>
          </div>
          
          <!-- Load More Button -->
          <div v-if="hasMoreArticles" class="text-center mt-12">
            <button 
              @click="loadMore"
              class="btn-primary"
              :disabled="loadingMore"
            >
              <span v-if="!loadingMore">もっと見る</span>
              <span v-else class="flex items-center">
                <div class="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                読み込み中...
              </span>
            </button>
          </div>
        </div>
      </section>

      <!-- Stats Section -->
      <section class="section-padding bg-white">
        <div class="container-custom">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-primary-800 mb-4">制作実績統計</h2>
            <p class="text-lg text-primary-600">カテゴリー別の制作実績をご覧ください</p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div v-for="(stat, index) in stats" :key="stat.category"
                 class="text-center p-6 rounded-xl bg-primary-50 animate-fade-in"
                 :style="`animation-delay: ${index * 0.1}s`">
              <div class="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                   :class="stat.iconBg">
                <component :is="stat.icon" class="w-8 h-8" :class="stat.iconColor" />
              </div>
              <div class="text-3xl font-bold mb-2" :class="stat.numberColor">
                {{ stat.articles.length }}
              </div>
              <div class="text-lg font-medium text-primary-700 mb-1">{{ stat.category }}</div>
              <div class="text-sm text-primary-500">{{ stat.description }}</div>
              
              <!-- Average Word Count -->
              <div class="mt-3 pt-3 border-t border-primary-200">
                <div class="text-sm text-primary-600">
                  平均文字数: {{ Math.round(stat.avgWordCount || 0).toLocaleString() }}字
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </template>
  </div>
</template>

<script setup>
import { ChevronRight, Search, FileText, Target, BarChart3, PenTool } from 'lucide-vue-next'

// Meta tags
useHead({
  title: 'ポートフォリオ - Content Creator\'s Workshop',
  meta: [
    { name: 'description', content: 'フリーランスライターの制作実績一覧' },
    { name: 'robots', content: 'noindex, nofollow' }, // デモサイト用
  ]
})

// 全記事データを取得
const { data: allArticles, pending, error, refresh } = await useAsyncData('portfolio-articles', () => 
  queryContent('/articles').find()
)

// Reactive data
const activeCategory = ref('all')
const currentPage = ref(1)
const itemsPerPage = 9
const loadingMore = ref(false)

// カテゴリー設定（動的に記事数を計算）
const categories = computed(() => {
  if (!allArticles.value) return []
  
  const shortCount = allArticles.value.filter(a => a.category === 'short').length
  const mediumCount = allArticles.value.filter(a => a.category === 'medium').length
  const longCount = allArticles.value.filter(a => a.category === 'long').length
  const totalCount = allArticles.value.length

  return [
    {
      key: 'all',
      name: 'すべて',
      icon: PenTool,
      count: totalCount,
      badgeClass: 'bg-primary-500'
    },
    {
      key: 'short',
      name: 'ショート',
      icon: FileText,
      count: shortCount,
      badgeClass: 'bg-category-short'
    },
    {
      key: 'medium', 
      name: 'ミディアム',
      icon: Target,
      count: mediumCount,
      badgeClass: 'bg-category-medium'
    },
    {
      key: 'long',
      name: 'ロング',
      icon: BarChart3,
      count: longCount,
      badgeClass: 'bg-category-long'
    }
  ]
})

// Computed properties
const filteredArticles = computed(() => {
  if (!allArticles.value) return []
  
  if (activeCategory.value === 'all') {
    return allArticles.value
  }
  return allArticles.value.filter(article => article.category === activeCategory.value)
})

const paginatedArticles = computed(() => {
  const start = 0
  const end = currentPage.value * itemsPerPage
  return filteredArticles.value.slice(start, end)
})

const hasMoreArticles = computed(() => {
  return paginatedArticles.value.length < filteredArticles.value.length
})

const stats = computed(() => {
  if (!allArticles.value) return []
  
  const shortArticles = allArticles.value.filter(a => a.category === 'short')
  const mediumArticles = allArticles.value.filter(a => a.category === 'medium')
  const longArticles = allArticles.value.filter(a => a.category === 'long')
  
  return [
    {
      category: 'ショート記事',
      description: '200-1,000文字',
      articles: shortArticles,
      avgWordCount: shortArticles.length > 0 
        ? shortArticles.reduce((sum, a) => sum + (a.wordCount || 0), 0) / shortArticles.length 
        : 0,
      icon: FileText,
      iconBg: 'bg-category-short/20',
      iconColor: 'text-category-short',
      numberColor: 'text-category-short'
    },
    {
      category: 'ミディアム記事',
      description: '1,000-5,000文字',
      articles: mediumArticles,
      avgWordCount: mediumArticles.length > 0 
        ? mediumArticles.reduce((sum, a) => sum + (a.wordCount || 0), 0) / mediumArticles.length 
        : 0,
      icon: Target,
      iconBg: 'bg-category-medium/20',
      iconColor: 'text-category-medium',
      numberColor: 'text-category-medium'
    },
    {
      category: 'ロング記事',
      description: '5,000文字以上',
      articles: longArticles,
      avgWordCount: longArticles.length > 0 
        ? longArticles.reduce((sum, a) => sum + (a.wordCount || 0), 0) / longArticles.length 
        : 0,
      icon: BarChart3,
      iconBg: 'bg-category-long/20',
      iconColor: 'text-category-long',
      numberColor: 'text-category-long'
    }
  ]
})

// Methods
const loadMore = async () => {
  loadingMore.value = true
  await new Promise(resolve => setTimeout(resolve, 500)) // Simulate loading
  currentPage.value++
  loadingMore.value = false
}

// Watch for category changes
watch(activeCategory, () => {
  currentPage.value = 1
})
</script>

<style scoped>
.category-tab {
  @apply px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center;
}

.category-tab-active {
  @apply bg-secondary-500 text-white shadow-lg;
}

.category-tab-inactive {
  @apply bg-white text-primary-600 hover:bg-primary-50 border border-primary-200;
}

.category-badge {
  @apply ml-2 px-2 py-0.5 rounded-full text-xs font-medium text-white;
}
</style>