<!-- pages/about.vue -->
<template>
  <div class="min-h-screen pt-20 md:pt-24">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-800 via-secondary-600 to-accent-500 py-20">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Profile Image -->
          <div class="relative animate-fade-in">
            <div class="w-80 h-80 mx-auto lg:mx-0 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center overflow-hidden shadow-2xl">
              <User class="w-40 h-40 text-white/60" />
            </div>
          </div>
          
          <!-- Profile Content -->
          <div class="text-white space-y-6 animate-fade-in" style="animation-delay: 0.2s;">
            <div class="demo-badge bg-white/20 text-white">
              🎭 架空のプロフィール
            </div>
            
            <h1 class="text-4xl md:text-5xl font-bold">
              田中 太郎
              <span class="block text-2xl text-accent-300 mt-2">Content Creator</span>
            </h1>
            
            <p class="text-xl text-primary-100 leading-relaxed">
              デジタルマーケティングとビジネスコンテンツを専門とするフリーランスライター。
              5年以上の経験を活かし、企業のブランドストーリーから技術解説まで、
              読者の心を動かすコンテンツを制作しています。
            </p>
            
            <div class="flex flex-wrap gap-4">
              <div class="flex items-center space-x-2">
                <Calendar class="w-5 h-5 text-accent-300" />
                <span>経験年数: 5年+</span>
              </div>
              <div class="flex items-center space-x-2">
                <Award class="w-5 h-5 text-accent-300" />
                <span>制作実績: 200記事+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Timeline -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-primary-800 mb-4">経歴</h2>
          <p class="text-lg text-primary-600">これまでの歩みをご紹介します</p>
        </div>
        
        <div class="max-w-4xl mx-auto">
          <div class="relative">
            <!-- Timeline Line -->
            <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200"></div>
            
            <div class="space-y-12">
              <div v-for="(item, index) in timeline" :key="index" 
                   class="relative flex items-start animate-fade-in"
                   :style="`animation-delay: ${index * 0.1}s`">
                <!-- Timeline Dot -->
                <div class="w-16 h-16 bg-white border-4 border-secondary-500 rounded-full flex items-center justify-center shadow-lg z-10">
                  <component :is="item.icon" class="w-6 h-6 text-secondary-500" />
                </div>
                
                <!-- Content -->
                <div class="ml-8 flex-1">
                  <div class="bg-primary-50 rounded-xl p-6 shadow-sm">
                    <div class="flex items-center justify-between mb-3">
                      <h3 class="text-xl font-semibold text-primary-800">{{ item.title }}</h3>
                      <span class="text-sm text-secondary-600 font-medium">{{ item.period }}</span>
                    </div>
                    <p class="text-primary-600 mb-3">{{ item.company }}</p>
                    <p class="text-primary-700">{{ item.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="section-padding bg-primary-50">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-primary-800 mb-4">スキル・専門分野</h2>
          <p class="text-lg text-primary-600">得意とする分野とスキルレベル</p>
        </div>
        
        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Writing Skills -->
          <div class="animate-fade-in">
            <h3 class="text-2xl font-semibold text-primary-800 mb-6 flex items-center">
              <PenTool class="w-6 h-6 mr-3 text-secondary-500" />
              ライティングスキル
            </h3>
            <div class="space-y-4">
              <div v-for="skill in writingSkills" :key="skill.name" class="skill-item">
                <div class="flex justify-between items-center mb-2">
                  <span class="font-medium text-primary-700">{{ skill.name }}</span>
                  <span class="text-sm text-primary-600">{{ skill.level }}%</span>
                </div>
                <div class="w-full bg-primary-200 rounded-full h-2">
                  <div 
                    class="h-2 rounded-full transition-all duration-1000 ease-out"
                    :class="skill.color"
                    :style="`width: ${skill.level}%`"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Technical Skills -->
          <div class="animate-fade-in" style="animation-delay: 0.2s;">
            <h3 class="text-2xl font-semibold text-primary-800 mb-6 flex items-center">
              <Code class="w-6 h-6 mr-3 text-secondary-500" />
              テクニカルスキル
            </h3>
            <div class="space-y-4">
              <div v-for="skill in technicalSkills" :key="skill.name" class="skill-item">
                <div class="flex justify-between items-center mb-2">
                  <span class="font-medium text-primary-700">{{ skill.name }}</span>
                  <div class="flex">
                    <Star 
                      v-for="i in 5" 
                      :key="i"
                      class="w-4 h-4"
                      :class="i <= skill.level ? 'text-accent-500' : 'text-primary-300'"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Industry Expertise -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-primary-800 mb-4">業界別実績</h2>
          <p class="text-lg text-primary-600">様々な業界での執筆経験</p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(industry, index) in industries" :key="industry.name"
               class="text-center p-6 rounded-xl bg-primary-50 hover:bg-primary-100 transition-all duration-300 hover:scale-105 animate-fade-in"
               :style="`animation-delay: ${index * 0.1}s`">
            <div class="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                 :class="industry.iconBg">
              <component :is="industry.icon" class="w-8 h-8" :class="industry.iconColor" />
            </div>
            <h3 class="text-lg font-semibold text-primary-800 mb-2">{{ industry.name }}</h3>
            <p class="text-sm text-primary-600 mb-3">{{ industry.description }}</p>
            <div class="text-2xl font-bold" :class="industry.countColor">{{ industry.articles }}+</div>
            <div class="text-xs text-primary-500">記事</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Work Process -->
    <section class="section-padding bg-gradient-to-r from-secondary-50 to-accent-50">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-primary-800 mb-4">制作フロー</h2>
          <p class="text-lg text-primary-600">ご依頼から納品までの流れ</p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(step, index) in workProcess" :key="step.step"
               class="relative animate-fade-in"
               :style="`animation-delay: ${index * 0.15}s`">
            <!-- Step Card -->
            <div class="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
              <div class="w-12 h-12 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                {{ step.step }}
              </div>
              <h3 class="text-lg font-semibold text-primary-800 mb-2">{{ step.title }}</h3>
              <p class="text-sm text-primary-600">{{ step.description }}</p>
            </div>
            
            <!-- Arrow (except last item) -->
            <div v-if="index < workProcess.length - 1" 
                 class="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
              <ArrowRight class="w-6 h-6 text-primary-400" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- GitHub Integration -->
    <section class="section-padding bg-primary-800 text-white">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="animate-fade-in">
            <h2 class="text-3xl md:text-4xl font-bold mb-6">
              <Github class="w-10 h-10 inline-block mr-3 text-accent-300" />
              技術スキル
            </h2>
            <p class="text-xl text-primary-100 leading-relaxed mb-8">
              ライティングだけでなく、GitHubを活用した技術プロジェクトにも対応。
              コードドキュメントや技術記事の制作もお任せください。
            </p>
            
            <div class="space-y-4">
              <div v-for="tech in techStack" :key="tech.name" 
                   class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-accent-400 rounded-full"></div>
                <span class="text-primary-200">{{ tech.name }}</span>
                <span class="text-accent-300 text-sm">{{ tech.description }}</span>
              </div>
            </div>
          </div>
          
          <div class="animate-fade-in" style="animation-delay: 0.2s;">
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div class="text-center">
                <Github class="w-24 h-24 mx-auto mb-6 text-accent-300 animate-bounce-gentle" />
                <h3 class="text-2xl font-semibold mb-4">GitHub で確認</h3>
                <p class="text-primary-200 mb-6">
                  実際のコードやドキュメント制作例をご覧いただけます
                </p>
                <a href="#" class="btn-primary bg-accent-500 hover:bg-accent-600">
                  GitHub プロフィール
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { 
  User, Calendar, Award, PenTool, Code, Star, ArrowRight, Github,
  Briefcase, GraduationCap, Target, Building, Smartphone, ShoppingCart, Heart
} from 'lucide-vue-next'

// Meta tags
useHead({
  title: 'アバウト - Content Creator\'s Workshop',
  meta: [
    { name: 'description', content: 'フリーランスライター田中太郎のプロフィールと経歴' }
  ]
})

// Data
const timeline = [
  {
    title: 'フリーランスライター',
    company: '独立・個人事業',
    period: '2019年 - 現在',
    description: '様々な企業のコンテンツマーケティングを支援。月間50記事以上の制作実績。',
    icon: PenTool
  },
  {
    title: 'コンテンツマネージャー',
    company: '株式会社デジタルソリューションズ',
    period: '2017年 - 2019年',
    description: 'Webメディアの編集長として、チーム管理とコンテンツ戦略を担当。',
    icon: Target
  },
  {
    title: 'マーケティング担当',
    company: 'スタートアップ企業',
    period: '2015年 - 2017年',
    description: 'デジタルマーケティング全般を担当。ブログ運営で月間PV100万を達成。',
    icon: Briefcase
  },
  {
    title: '文学部卒業',
    company: '私立大学',
    period: '2011年 - 2015年',
    description: '日本文学専攻。在学中からWebライティングのアルバイトを開始。',
    icon: GraduationCap
  }
]

const writingSkills = [
  { name: 'SEOライティング', level: 95, color: 'bg-secondary-500' },
  { name: 'コピーライティング', level: 90, color: 'bg-accent-500' },
  { name: 'テクニカルライティング', level: 85, color: 'bg-genre-tech' },
  { name: 'ブログ記事', level: 95, color: 'bg-genre-marketing' },
  { name: 'プレスリリース', level: 80, color: 'bg-genre-business' }
]

const technicalSkills = [
  { name: 'WordPress', level: 4 },
  { name: 'HTML/CSS', level: 3 },
  { name: 'Google Analytics', level: 5 },
  { name: 'SEOツール', level: 5 },
  { name: 'GitHub', level: 3 }
]

const industries = [
  {
    name: 'IT・テック',
    description: 'ソフトウェア、AI、Web制作',
    articles: 45,
    icon: Code,
    iconBg: 'bg-genre-tech/20',
    iconColor: 'text-genre-tech',
    countColor: 'text-genre-tech'
  },
  {
    name: 'マーケティング',
    description: 'デジタル広告、SNS運用',
    articles: 38,
    icon: Target,
    iconBg: 'bg-genre-marketing/20',
    iconColor: 'text-genre-marketing',
    countColor: 'text-genre-marketing'
  },
  {
    name: 'ビジネス',
    description: '経営戦略、人事、財務',
    articles: 32,
    icon: Building,
    iconBg: 'bg-genre-business/20',
    iconColor: 'text-genre-business',
    countColor: 'text-genre-business'
  },
  {
    name: 'ライフスタイル',
    description: '健康、美容、ライフハック',
    articles: 25,
    icon: Heart,
    iconBg: 'bg-genre-lifestyle/20',
    iconColor: 'text-genre-lifestyle',
    countColor: 'text-genre-lifestyle'
  }
]

const workProcess = [
  {
    step: 1,
    title: 'ヒアリング',
    description: 'ご要望や目的、ターゲット読者について詳しくお伺いします'
  },
  {
    step: 2,
    title: '企画・構成',
    description: '記事の構成案を作成し、方向性をすり合わせます'
  },
  {
    step: 3,
    title: '執筆・制作',
    description: '構成に沿って記事を執筆し、SEO対策も実施します'
  },
  {
    step: 4,
    title: '納品・修正',
    description: '記事を納品し、必要に応じて修正対応いたします'
  }
]

const techStack = [
  { name: 'Vue.js / Nuxt.js', description: 'フロントエンド開発' },
  { name: 'GitHub Actions', description: 'CI/CD パイプライン' },
  { name: 'Markdown', description: 'ドキュメント作成' },
  { name: 'Vercel / Netlify', description: 'ホスティング・デプロイ' }
]
</script>

<style scoped>
.skill-item {
  @apply bg-white rounded-lg p-4 shadow-sm;
}
</style>