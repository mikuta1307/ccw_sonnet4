<!-- pages/index.vue -->
<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-primary-800 via-secondary-600 to-accent-500 overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 bg-mesh opacity-30"></div>
      
      <!-- Hero Content -->
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
        <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh] lg:min-h-[75vh]">
          <!-- Left Content -->
          <div class="text-white space-y-4 lg:space-y-6 animate-fade-in">
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span class="block">読者の心に響く</span>
              <span class="text-accent-300 block mt-1">コンテンツを創造</span>
            </h1>
            
            <p class="text-base md:text-lg lg:text-xl text-primary-100 leading-relaxed max-w-lg">
              あらゆるジャンルで高品質な記事を執筆<br class="hidden sm:block">
              ブランドの価値を言葉で表現します
            </p>
            
            <!-- 実績ハイライト（動的） -->
            <div class="grid grid-cols-3 gap-3 lg:gap-4 py-4 lg:py-6 max-w-md">
              <div class="text-center">
                <div class="text-xl md:text-2xl lg:text-3xl font-bold text-accent-300">{{ totalArticles }}</div>
                <div class="text-xs lg:text-sm text-primary-200">執筆記事</div>
              </div>
              <div class="text-center">
                <div class="text-xl md:text-2xl lg:text-3xl font-bold text-accent-300">{{ uniqueGenres }}</div>
                <div class="text-xs lg:text-sm text-primary-200">取り扱いジャンル</div>
              </div>
              <div class="text-center">
                <div class="text-xl md:text-2xl lg:text-3xl font-bold text-accent-300">{{ totalWordCount.toLocaleString() }}</div>
                <div class="text-xs lg:text-sm text-primary-200">総執筆文字数</div>
              </div>
            </div>
            
            <div class="flex flex-col sm:flex-row gap-3 lg:gap-4 pt-2 lg:pt-4">
              <NuxtLink to="/portfolio" class="btn-primary text-sm lg:text-base px-4 lg:px-6 py-2 lg:py-3">
                制作実績を見る
              </NuxtLink>
              <NuxtLink to="/about" class="btn-secondary text-sm lg:text-base px-4 lg:px-6 py-2 lg:py-3">
                プロフィール
              </NuxtLink>
            </div>
            
            <!-- Social Links -->
            <div class="flex items-center space-x-3 lg:space-x-4 pt-4 lg:pt-6">
              <a href="#" class="social-icon w-10 h-10 lg:w-12 lg:h-12" aria-label="GitHub">
                <Github class="w-5 h-5 lg:w-6 lg:h-6" />
              </a>
              <a href="#" class="social-icon w-10 h-10 lg:w-12 lg:h-12" aria-label="LinkedIn">
                <Linkedin class="w-5 h-5 lg:w-6 lg:h-6" />
              </a>
              <a href="#" class="social-icon w-10 h-10 lg:w-12 lg:h-12" aria-label="Email">
                <Mail class="w-5 h-5 lg:w-6 lg:h-6" />
              </a>
            </div>
          </div>
          
          <!-- Right Content - Hero Image -->
          <div class="relative animate-slide-up lg:animate-none">
            <div class="relative w-full h-96 sm:h-[450px] lg:h-[500px] rounded-xl lg:rounded-2xl overflow-hidden shadow-xl lg:shadow-2xl">
              <!-- 画像のフォールバック対応 -->
              <img 
                src="/images/hero-workspace.jpg" 
                alt="プロフェッショナルなライティング環境"
                class="w-full h-full object-cover"
                @error="handleImageError"
              />
              <!-- 画像読み込みエラー時のフォールバック -->
              <div v-if="imageError" class="absolute inset-0 bg-primary-700 flex flex-col items-center justify-center text-white p-8">
                <FileText class="w-16 h-16 mb-4 opacity-50" />
                <p class="text-lg font-semibold mb-2">プロフェッショナルな</p>
                <p class="text-lg font-semibold">ライティング環境</p>
              </div>
              
              <!-- グラデーションオーバーレイ -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              <!-- オーバーレイコンテンツ -->
              <div class="absolute bottom-6 lg:bottom-8 left-4 lg:left-6 right-4 lg:right-6 text-white">
                <h3 class="text-base lg:text-lg font-bold mb-1 lg:mb-2">リアルタイム記事制作</h3>
                <p class="text-xs lg:text-sm opacity-90">
                  アイデアから公開まで、一貫したコンテンツ制作プロセス
                </p>
              </div>
              
              <!-- フローティング要素: 品質指標 -->
              <div class="absolute top-3 lg:top-4 right-3 lg:right-4 space-y-1 lg:space-y-2">
                <div class="bg-green-500/20 backdrop-blur-sm rounded-full px-2 lg:px-3 py-1 text-white text-xs flex items-center">
                  <div class="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-green-400 rounded-full mr-1 lg:mr-2 animate-pulse"></div>
                  執筆中
                </div>
                <div class="bg-blue-500/20 backdrop-blur-sm rounded-full px-2 lg:px-3 py-1 text-white text-xs">
                  高品質保証
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Works Section -->
    <section class="py-16 lg:py-24 bg-primary-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 animate-fade-in">
          <h2 class="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
            Featured Works
          </h2>
          <p class="text-lg text-primary-600 max-w-2xl mx-auto">
            クライアントワークを想定した制作事例をご紹介します
          </p>
        </div>
        
        <!-- Loading State -->
        <div v-if="pending" class="flex justify-center py-12">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
        </div>
        
        <!-- Featured Articles -->
        <div v-else-if="featuredArticles && featuredArticles.length > 0" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ArticleCard 
            v-for="(article, index) in featuredArticles" 
            :key="article._path"
            :article="article"
            :animation-delay="index * 0.1"
          />
        </div>
        
        <!-- Empty State -->
        <div v-else class="text-center py-12">
          <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText class="w-8 h-8 text-primary-400" />
          </div>
          <p class="text-primary-600">記事を準備中です...</p>
        </div>
        
        <div class="text-center mt-12">
          <NuxtLink to="/portfolio" class="btn-primary">
            すべての制作実績を見る
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 lg:py-24 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(stat, index) in dynamicStats" :key="stat.category"
               class="text-center animate-fade-in"
               :style="`animation-delay: ${index * 0.2}s`">
            <div class="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                 :class="stat.iconBg">
              <component :is="stat.icon" class="w-8 h-8" :class="stat.iconColor" />
            </div>
            <div class="text-3xl md:text-4xl font-bold mb-2" :class="stat.numberColor">
              {{ stat.count }}
            </div>
            <div class="text-lg font-medium text-primary-600">{{ stat.category }}</div>
            <div class="text-sm text-primary-500">{{ stat.description }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="py-16 lg:py-24 bg-primary-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 animate-fade-in">
          <h2 class="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
            Expertise
          </h2>
          <p class="text-lg text-primary-600">
            多様なジャンルでの執筆経験
          </p>
        </div>
        
        <div class="flex flex-wrap justify-center gap-4">
          <span v-for="(skill, index) in skills" :key="skill.name"
                class="px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-110 cursor-pointer animate-fade-in"
                :class="skill.class"
                :style="`animation-delay: ${index * 0.1}s`">
            {{ skill.name }}
          </span>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 lg:py-24 bg-gradient-to-r from-secondary-500 to-accent-500">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="max-w-3xl mx-auto text-white animate-fade-in">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            プロの記事で差をつけませんか
          </h2>
          <p class="text-xl mb-8 opacity-90">
            あなたのビジネスに最適な記事を制作します<br>
            読者を惹きつける高品質なコンテンツで成果を上げましょう
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/contact" class="inline-flex items-center justify-center px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105">
              お問い合わせ
            </NuxtLink>
            <a href="#" class="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white border border-white rounded-lg font-medium hover:bg-white hover:text-secondary-500 transition-all duration-300 hover:scale-105">
              <Github class="w-4 h-4 mr-2" />
              GitHub で見る
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { FileText, Github, Linkedin, Mail, Zap, Star, PenTool, Target, BarChart } from 'lucide-vue-next'

// Meta tags
useHead({
  title: 'Content Creator\'s Workshop - Demo Portfolio',
  meta: [
    { name: 'description', content: 'フリーランスライターのデモポートフォリオサイト' },
    { name: 'robots', content: 'noindex, nofollow' }, // デモサイト用
  ]
})

// 画像エラーハンドリング
const imageError = ref(false)

const handleImageError = () => {
  imageError.value = true
}

// Featured articles data（Nuxt Contentから取得）
const { data: allArticles, pending } = await useAsyncData('home-articles', () => 
  queryContent('/articles').find()
)

// Featured articles（最新3件を取得）
const featuredArticles = computed(() => {
  if (!allArticles.value) return []
  
  return allArticles.value
    .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))
    .slice(0, 3)
})

// 動的統計データ（ヒーロー用）
const totalArticles = computed(() => allArticles.value?.length || 0)

const uniqueGenres = computed(() => {
  if (!allArticles.value) return 0
  const genres = new Set()
  allArticles.value.forEach(article => {
    article.genre?.forEach(g => genres.add(g))
  })
  return genres.size
})

const totalWordCount = computed(() => {
  if (!allArticles.value) return 0
  return allArticles.value.reduce((total, article) => {
    return total + (article.wordCount || 0)
  }, 0)
})

// 動的統計データ（Stats Section用）
const dynamicStats = computed(() => {
  if (!allArticles.value) {
    // フォールバック値
    return [
      {
        category: 'ショート記事',
        count: '0',
        description: '200-1,000文字',
        icon: PenTool,
        iconBg: 'bg-category-short/20',
        iconColor: 'text-category-short',
        numberColor: 'text-category-short'
      },
      {
        category: 'ミディアム記事',
        count: '0',
        description: '1,000-5,000文字',
        icon: Target,
        iconBg: 'bg-category-medium/20',
        iconColor: 'text-category-medium',
        numberColor: 'text-category-medium'
      },
      {
        category: 'ロング記事',
        count: '0',
        description: '5,000文字以上',
        icon: BarChart,
        iconBg: 'bg-category-long/20',
        iconColor: 'text-category-long',
        numberColor: 'text-category-long'
      }
    ]
  }
  
  const shortCount = allArticles.value.filter(a => a.category === 'short').length
  const mediumCount = allArticles.value.filter(a => a.category === 'medium').length
  const longCount = allArticles.value.filter(a => a.category === 'long').length
  
  return [
    {
      category: 'ショート記事',
      count: shortCount.toString(),
      description: '200-1,000文字',
      icon: PenTool,
      iconBg: 'bg-category-short/20',
      iconColor: 'text-category-short',
      numberColor: 'text-category-short'
    },
    {
      category: 'ミディアム記事',
      count: mediumCount.toString(),
      description: '1,000-5,000文字',
      icon: Target,
      iconBg: 'bg-category-medium/20',
      iconColor: 'text-category-medium',
      numberColor: 'text-category-medium'
    },
    {
      category: 'ロング記事',
      count: longCount.toString(),
      description: '5,000文字以上',
      icon: BarChart,
      iconBg: 'bg-category-long/20',
      iconColor: 'text-category-long',
      numberColor: 'text-category-long'
    }
  ]
})

const skills = [
  { name: '健康・ヘルスケア', class: 'bg-secondary-100 text-secondary-700 hover:bg-secondary-500 hover:text-white text-lg' },
  { name: '美容・スキンケア', class: 'bg-accent-100 text-accent-700 hover:bg-accent-500 hover:text-white' },
  { name: 'グルメ・レシピ', class: 'bg-genre-marketing/20 text-genre-marketing hover:bg-genre-marketing hover:text-white text-lg' },
  { name: 'インテリア・DIY', class: 'bg-primary-100 text-primary-700 hover:bg-primary-500 hover:text-white' },
  { name: 'エンタメ・映画', class: 'bg-genre-lifestyle/20 text-genre-lifestyle hover:bg-genre-lifestyle hover:text-white' },
  { name: '旅行・おでかけ', class: 'bg-genre-business/20 text-genre-business hover:bg-genre-business hover:text-white' },
  { name: 'ペット・動物', class: 'bg-genre-tech/20 text-genre-tech hover:bg-genre-tech hover:text-white text-lg' },
  { name: 'ファッション', class: 'bg-secondary-100 text-secondary-700 hover:bg-secondary-500 hover:text-white' },
  { name: '子育て・家族', class: 'bg-accent-100 text-accent-700 hover:bg-accent-500 hover:text-white' },
  { name: 'ライフハック', class: 'bg-primary-100 text-primary-700 hover:bg-primary-500 hover:text-white text-lg' }
]
</script>

<style scoped>
.social-icon {
  @apply bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110;
}

/* カスタムアニメーション */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
}

.animate-slide-up {
  animation: slide-up 0.8s ease-out forwards;
}

/* 必要に応じて他のカスタムスタイルを追加 */
</style>