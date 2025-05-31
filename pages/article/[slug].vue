<!-- pages/article/[slug].vue -->
<template>
  <div>
    <!-- ローディング状態 -->
    <div v-if="pending" class="min-h-screen flex items-center justify-center">
      <div class="text-center">
        <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600 mx-auto mb-4"></div>
        <p class="text-lg">記事を読み込み中...</p>
      </div>
    </div>

    <!-- エラー状態 -->
    <div v-else-if="error" class="min-h-screen flex items-center justify-center">
      <div class="text-center max-w-4xl mx-auto p-8">
        <h1 class="text-4xl font-bold text-red-600 mb-4">エラーが発生しました</h1>
        <div class="bg-red-50 border border-red-200 rounded-lg p-6 mb-8 text-left">
          <h2 class="text-lg font-semibold text-red-800 mb-4">エラー詳細:</h2>
          <pre class="text-sm text-red-700 overflow-auto whitespace-pre-wrap">{{ JSON.stringify(error, null, 2) }}</pre>
        </div>
        <NuxtLink to="/portfolio" class="btn-primary">
          ← ポートフォリオに戻る
        </NuxtLink>
      </div>
    </div>

    <!-- 記事が見つからない場合 -->
    <div v-else-if="!article" class="min-h-screen flex items-center justify-center">
      <div class="text-center max-w-4xl mx-auto p-8">
        <h1 class="text-4xl font-bold text-orange-600 mb-4">記事が見つかりません</h1>
        <div class="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
          <p class="text-orange-800 mb-4">
            お探しの記事「<strong>{{ slug }}</strong>」は存在しません。
          </p>
          <div class="text-left text-sm">
            <h3 class="font-semibold mb-2">利用可能な記事:</h3>
            <ul class="space-y-1">
              <li>• <NuxtLink to="/article/home-cafe-recipes" class="text-blue-600 hover:underline">home-cafe-recipes</NuxtLink></li>
              <li>• <NuxtLink to="/article/5-minute-stretch-routine" class="text-blue-600 hover:underline">5-minute-stretch-routine</NuxtLink></li>
              <li>• <NuxtLink to="/article/spring-room-makeover" class="text-blue-600 hover:underline">spring-room-makeover</NuxtLink></li>
              <li>• <NuxtLink to="/article/digital-marketing-strategy-guide" class="text-blue-600 hover:underline">digital-marketing-strategy-guide</NuxtLink></li>
            </ul>
          </div>
        </div>
        <NuxtLink to="/portfolio" class="btn-primary">
          ← ポートフォリオに戻る
        </NuxtLink>
      </div>
    </div>

    <!-- 記事コンテンツ -->
    <div v-else class="article-page">
      <!-- Article Header -->
      <section class="relative bg-gradient-to-br from-primary-800 via-secondary-600 to-accent-500 overflow-hidden">
        <!-- Background Pattern -->
        <div class="absolute inset-0 bg-mesh opacity-20"></div>
        
        <div class="container-custom relative z-10 pt-24 pb-20">
          <!-- Breadcrumb -->
          <nav class="mb-6">
            <ol class="flex items-center space-x-2 text-sm text-primary-200">
              <li>
                <NuxtLink to="/" class="hover:text-white transition-colors">ホーム</NuxtLink>
              </li>
              <li><ChevronRight class="w-4 h-4" /></li>
              <li>
                <NuxtLink to="/portfolio" class="hover:text-white transition-colors">ポートフォリオ</NuxtLink>
              </li>
              <li><ChevronRight class="w-4 h-4" /></li>
              <li class="text-white">{{ article.title }}</li>
            </ol>
          </nav>
          
          <div class="max-w-4xl animate-fade-in">
            <!-- Category Badge -->
            <div class="mb-4">
              <span 
                class="px-3 py-1 rounded-full text-sm font-medium text-white"
                :class="categoryBadgeClass"
              >
                {{ categoryLabel }}記事
              </span>
            </div>
            
            <!-- Title -->
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {{ article.title }}
            </h1>
            
            <!-- Subtitle -->
            <p class="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
              {{ article.description }}
            </p>
            
            <!-- Meta Information -->
            <div class="flex flex-wrap items-center gap-6 text-primary-200">
              <div class="flex items-center space-x-2">
                <Calendar class="w-5 h-5" />
                <span>{{ formatDate(article.publishDate) }}</span>
              </div>
              <div class="flex items-center space-x-2">
                <Clock class="w-5 h-5" />
                <span>{{ readingTime }}分で読めます</span>
              </div>
              <div class="flex items-center space-x-2">
                <FileText class="w-5 h-5" />
                <span>{{ article.wordCount?.toLocaleString() || '---' }}文字</span>
              </div>
              <div v-if="article.clientType" class="flex items-center space-x-2">
                <Building class="w-5 h-5" />
                <span>{{ article.clientType }}</span>
              </div>
            </div>
            
            <!-- Genre Tags -->
            <div v-if="article.genre && article.genre.length > 0" class="flex flex-wrap gap-2 mt-6">
              <span 
                v-for="genre in article.genre"
                :key="genre"
                class="px-3 py-1 text-sm rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors duration-300"
              >
                {{ genre }}
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- Article Content -->
      <article class="section-padding bg-white">
        <div class="container-custom">
          <div class="grid lg:grid-cols-4 gap-12">
            <!-- Main Content -->
            <div class="lg:col-span-3">
              <div class="max-w-4xl mx-auto prose prose-lg prose-primary animate-fade-in">
                <!-- Demo Notice -->
                <div class="not-prose bg-accent-50 border border-accent-200 rounded-xl p-6 mb-8">
                  <div class="flex items-start">
                    <AlertTriangle class="w-6 h-6 text-accent-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 class="text-lg font-semibold text-accent-800 mb-2">デモ記事について</h3>
                      <p class="text-accent-700 mb-3">
                        これは実際のクライアントワークを想定したサンプル記事です。
                        実際の案件では、お客様のご要望に応じてより詳細で専門的な内容を制作いたします。
                      </p>
                      <div class="text-sm text-accent-600">
                        <strong>想定クライアント:</strong> {{ article.clientType || '未設定' }} |
                        <strong>制作期間:</strong> {{ estimatedDays }}日 |
                        <strong>想定予算:</strong> {{ estimatedBudget }}
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Article Body（Nuxt Contentでレンダリング） -->
                <ContentRenderer :value="article" />
              </div>
            </div>
            
            <!-- Sidebar -->
            <div class="lg:col-span-1">
              <div class="sticky top-32 space-y-6">
                <!-- Table of Contents -->
                <div v-if="tableOfContents.length > 0" class="bg-primary-50 rounded-xl p-6 animate-fade-in" style="animation-delay: 0.2s;">
                  <h3 class="text-lg font-semibold text-primary-800 mb-4 flex items-center">
                    <List class="w-5 h-5 mr-2 text-secondary-500" />
                    目次
                  </h3>
                  <nav class="space-y-2">
                    <a v-for="heading in tableOfContents" :key="heading.id"
                       :href="`#${heading.id}`"
                       class="block text-sm text-primary-600 hover:text-secondary-600 transition-colors duration-200 py-1"
                       :class="{ 'pl-4': heading.depth >= 3 }">
                      {{ heading.text }}
                    </a>
                  </nav>
                </div>
                
                <!-- Share Buttons -->
                <div class="bg-white rounded-xl p-6 shadow-sm animate-fade-in" style="animation-delay: 0.3s;">
                  <h3 class="text-lg font-semibold text-primary-800 mb-4 flex items-center">
                    <Share2 class="w-5 h-5 mr-2 text-secondary-500" />
                    シェア
                  </h3>
                  <div class="space-y-2">
                    <button @click="shareOn('twitter')" 
                            class="w-full flex items-center space-x-3 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg transition-colors duration-200">
                      <Twitter class="w-4 h-4" />
                      <span class="text-sm font-medium">Twitter</span>
                    </button>
                    <button @click="shareOn('linkedin')" 
                            class="w-full flex items-center space-x-3 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg transition-colors duration-200">
                      <Linkedin class="w-4 h-4" />
                      <span class="text-sm font-medium">LinkedIn</span>
                    </button>
                    <button @click="copyUrl" 
                            class="w-full flex items-center space-x-3 px-4 py-2 bg-primary-50 hover:bg-primary-100 text-primary-600 rounded-lg transition-colors duration-200">
                      <Copy class="w-4 h-4" />
                      <span class="text-sm font-medium">URLコピー</span>
                    </button>
                  </div>
                </div>
                
                <!-- Article Stats -->
                <div class="bg-secondary-50 rounded-xl p-6 animate-fade-in" style="animation-delay: 0.4s;">
                  <h3 class="text-lg font-semibold text-primary-800 mb-4 flex items-center">
                    <BarChart3 class="w-5 h-5 mr-2 text-secondary-500" />
                    制作データ
                  </h3>
                  <div class="space-y-3 text-sm">
                    <div class="flex justify-between">
                      <span class="text-primary-600">文字数</span>
                      <span class="font-medium text-primary-800">{{ article.wordCount?.toLocaleString() || '---' }}字</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-primary-600">読了時間</span>
                      <span class="font-medium text-primary-800">{{ readingTime }}分</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-primary-600">制作期間</span>
                      <span class="font-medium text-primary-800">{{ estimatedDays }}日</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-primary-600">想定予算</span>
                      <span class="font-medium text-primary-800">{{ estimatedBudget }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <!-- Production Points Section -->
      <section v-if="currentProductionPoints.length > 0" class="section-padding bg-primary-50">
        <div class="container-custom">
          <div class="max-w-4xl mx-auto">
            <div class="text-center mb-12 animate-fade-in">
              <h2 class="text-3xl font-bold text-primary-800 mb-4 flex items-center justify-center">
                <Lightbulb class="w-8 h-8 mr-3 text-accent-500" />
                制作のポイント
              </h2>
              <p class="text-lg text-primary-600">
                この記事制作で重視した点をご紹介します
              </p>
            </div>
            
            <div class="grid md:grid-cols-2 gap-8">
              <div v-for="(point, index) in currentProductionPoints" :key="index"
                   class="bg-white rounded-xl p-6 shadow-sm animate-fade-in"
                   :style="`animation-delay: ${index * 0.1}s`">
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                       :class="point.iconBg">
                    <component :is="point.icon" class="w-6 h-6" :class="point.iconColor" />
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-primary-800 mb-2">{{ point.title }}</h3>
                    <p class="text-primary-600">{{ point.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Related Articles -->
      <section v-if="relatedArticles && relatedArticles.length > 0" class="section-padding bg-white">
        <div class="container-custom">
          <div class="text-center mb-12 animate-fade-in">
            <h2 class="text-3xl font-bold text-primary-800 mb-4">関連する制作事例</h2>
            <p class="text-lg text-primary-600">
              この記事に関連する他の制作実績をご覧ください
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ArticleCard 
              v-for="(relatedArticle, index) in relatedArticles" 
              :key="relatedArticle._path"
              :article="relatedArticle"
              :animation-delay="index * 0.1"
            />
          </div>
          
          <div class="text-center mt-12">
            <NuxtLink to="/portfolio" class="btn-primary">
              すべての制作実績を見る
            </NuxtLink>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { 
  ChevronRight, Calendar, Clock, FileText, Building, AlertTriangle,
  List, Share2, Twitter, Linkedin, Copy, BarChart3, Lightbulb,
  Target, Users, Search, TrendingUp, Heart, Coffee, Dumbbell
} from 'lucide-vue-next'

// Get route params
const route = useRoute()
const slug = route.params.slug

// 記事データの取得（複数パターンで検索）
const { data: article, pending, error } = await useAsyncData(`article-${slug}`, async () => {
  try {
    // パターン1: slug フィールドで検索
    const bySlug = await queryContent('/articles').where({ slug: { $eq: slug } }).findOne()
    if (bySlug) return bySlug
    
    // パターン2: ファイル名で直接検索
    const byPath = await queryContent(`/articles/${slug}`).findOne()
    if (byPath) return byPath
    
    return null
    
  } catch (err) {
    console.error('❌ Error fetching article:', err)
    throw err
  }
})

// 関連記事の取得（同じカテゴリまたはジャンルの記事を3件まで）
const { data: relatedArticles } = await useAsyncData(`related-${slug}`, () => 
  queryContent('/articles')
    .where({ 
      slug: { $ne: slug }, // 現在の記事を除外
      $or: [
        { category: article.value?.category },
        { genre: { $in: article.value?.genre || [] } }
      ]
    })
    .limit(3)
    .find()
)

// Computed properties
const categoryConfig = {
  short: { label: 'ショート', badgeClass: 'bg-category-short' },
  medium: { label: 'ミディアム', badgeClass: 'bg-category-medium' },
  long: { label: 'ロング', badgeClass: 'bg-category-long' }
}

const categoryLabel = computed(() => article.value ? categoryConfig[article.value.category]?.label || 'その他' : '')
const categoryBadgeClass = computed(() => article.value ? categoryConfig[article.value.category]?.badgeClass || 'bg-primary-500' : '')
const readingTime = computed(() => article.value ? Math.ceil((article.value.wordCount || 0) / 400) : 0)
const estimatedDays = computed(() => {
  if (!article.value) return ''
  if (article.value.category === 'short') return '2-3'
  if (article.value.category === 'medium') return '5-7'
  return '10-14'
})
const estimatedBudget = computed(() => {
  if (!article.value) return ''
  if (article.value.category === 'short') return '2-5万円'
  if (article.value.category === 'medium') return '5-15万円'
  return '15-30万円'
})

// 目次の自動生成（Nuxt Contentから取得）
const tableOfContents = computed(() => {
  if (!article.value || !article.value.body) return []
  
  // Nuxt Contentの目次情報を使用
  return article.value.body.toc?.links || []
})

// 制作ポイントデータ（記事別）
const productionPointsData = {
  '5-minute-stretch-routine': [
    {
      title: '実践しやすさを重視',
      description: '忙しい読者でも続けられるよう、短時間で効果的なストレッチを厳選しました。',
      icon: Target,
      iconBg: 'bg-secondary-100',
      iconColor: 'text-secondary-600'
    },
    {
      title: '安全性の確保',
      description: '怪我のリスクを避けるため、正しいフォームと注意点を詳しく説明しています。',
      icon: Heart,
      iconBg: 'bg-accent-100',
      iconColor: 'text-accent-600'
    }
  ],
  'home-cafe-recipes': [
    {
      title: '身近な材料で作れる',
      description: '特別な道具や材料を使わず、家庭にあるもので美味しく作れるレシピを厳選しました。',
      icon: Coffee,
      iconBg: 'bg-secondary-100',
      iconColor: 'text-secondary-600'
    },
    {
      title: '見た目の美しさも追求',
      description: 'SNSでシェアしたくなるような、フォトジェニックな仕上がりのコツを伝授します。',
      icon: Target,
      iconBg: 'bg-accent-100',
      iconColor: 'text-accent-600'
    }
  ]
}

const currentProductionPoints = computed(() => {
  return article.value ? productionPointsData[article.value.slug] || [] : []
})

// ユーティリティ関数
const getCategoryLabel = (category) => {
  const categoryMap = {
    'short': '短文コンテンツ',
    'medium': '中文コンテンツ',
    'long': '長文コンテンツ',
    'creative': 'クリエイティブ'
  }
  return categoryMap[category] || category
}

const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Methods
const shareOn = (platform) => {
  if (!process.client) return
  
  const url = encodeURIComponent(window.location.href)
  const title = encodeURIComponent(article.value.title)
  
  let shareUrl = ''
  switch (platform) {
    case 'twitter':
      shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`
      break
    case 'linkedin':
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
      break
  }
  
  if (shareUrl) {
    window.open(shareUrl, '_blank', 'width=600,height=400')
  }
}

const copyUrl = async () => {
  if (!process.client) return
  
  try {
    await navigator.clipboard.writeText(window.location.href)
    alert('URLをコピーしました！')
  } catch (err) {
    console.error('コピーに失敗しました:', err)
  }
}

// SEO設定（動的）
watchEffect(() => {
  if (article.value) {
    useHead({
      title: `${article.value.title} - Content Creator's Workshop`,
      meta: [
        { name: 'description', content: article.value.description },
        { name: 'keywords', content: article.value.genre?.join(', ') || '' },
        { property: 'og:title', content: article.value.title },
        { property: 'og:description', content: article.value.description },
        { property: 'og:type', content: 'article' },
        { name: 'article:published_time', content: article.value.publishDate },
        { name: 'article:author', content: 'Content Creator\'s Workshop' },
        { name: 'robots', content: 'noindex, nofollow' }, // デモサイト用
      ]
    })
  }
})

// 404エラーハンドリング
if (error.value) {
  console.error('Article page error:', error.value)
}
</script>

<style scoped>
/* プロセサー（記事本文）のカスタムスタイル */
.prose {
  @apply text-primary-700 leading-relaxed;
}

.prose h1 {
  @apply text-3xl font-bold text-primary-800 mt-8 mb-4 border-b border-gray-200 pb-2;
}

.prose h2 {
  @apply text-2xl font-bold text-primary-800 mt-12 mb-6 border-l-4 border-secondary-500 pl-4;
}

.prose h3 {
  @apply text-xl font-semibold text-primary-800 mt-8 mb-4;
}

.prose p {
  @apply mb-6 leading-relaxed;
}

.prose ul, .prose ol {
  @apply mb-6 pl-6;
}

.prose li {
  @apply mb-2;
}

.prose blockquote {
  @apply border-l-4 border-blue-500 pl-4 py-2 my-4 bg-blue-50 italic;
}

.prose code {
  @apply bg-gray-100 px-2 py-1 rounded text-sm font-mono;
}

.prose pre {
  @apply bg-gray-800 text-white p-4 rounded-lg overflow-x-auto my-4;
}

.prose a {
  @apply text-secondary-600 hover:text-secondary-700 underline transition-colors duration-200;
}

.prose img {
  @apply rounded-lg shadow-md my-6 w-full;
}

.prose strong {
  @apply font-semibold text-primary-800;
}

/* 記事ページ専用スタイル */
.article-page {
  position: relative;
  overflow: hidden;
}
</style>