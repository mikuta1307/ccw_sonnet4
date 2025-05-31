<!-- pages/contact.vue -->
<template>
  <div class="min-h-screen pt-20 md:pt-24">
    <!-- Page Header -->
    <section class="bg-gradient-to-r from-secondary-500 to-accent-500 py-16">
      <div class="container-custom text-center">
        <div class="animate-fade-in">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
            お問い合わせ
          </h1>
          <p class="text-xl text-white/90 max-w-2xl mx-auto">
            プロジェクトについてお気軽にご相談ください
          </p>
          <div class="demo-badge bg-white/20 text-white mt-4">
            🎭 デモサイトのため実際の送信はできません
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-16">
          <!-- Contact Form -->
          <div class="animate-fade-in">
            <div class="bg-primary-50 rounded-2xl p-8">
              <h2 class="text-2xl font-semibold text-primary-800 mb-6">
                プロジェクトのご相談
              </h2>
              
              <form @submit.prevent="handleSubmit" class="space-y-6">
                <!-- Name -->
                <div>
                  <label for="name" class="block text-sm font-medium text-primary-700 mb-2">
                    お名前 <span class="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    required
                    class="form-input"
                    placeholder="田中 太郎"
                  />
                </div>

                <!-- Email -->
                <div>
                  <label for="email" class="block text-sm font-medium text-primary-700 mb-2">
                    メールアドレス <span class="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    class="form-input"
                    placeholder="tanaka@example.com"
                  />
                </div>

                <!-- Company -->
                <div>
                  <label for="company" class="block text-sm font-medium text-primary-700 mb-2">
                    会社名・組織名
                  </label>
                  <input
                    id="company"
                    v-model="form.company"
                    type="text"
                    class="form-input"
                    placeholder="株式会社サンプル"
                  />
                </div>

                <!-- Project Type -->
                <div>
                  <label for="projectType" class="block text-sm font-medium text-primary-700 mb-2">
                    プロジェクト種別 <span class="text-red-500">*</span>
                  </label>
                  <select
                    id="projectType"
                    v-model="form.projectType"
                    required
                    class="form-input"
                  >
                    <option value="">選択してください</option>
                    <option value="blog">ブログ記事制作</option>
                    <option value="web-copy">Webコピーライティング</option>
                    <option value="press-release">プレスリリース</option>
                    <option value="white-paper">ホワイトペーパー</option>
                    <option value="technical">技術記事・ドキュメント</option>
                    <option value="other">その他</option>
                  </select>
                </div>

                <!-- Budget -->
                <div>
                  <label for="budget" class="block text-sm font-medium text-primary-700 mb-2">
                    ご予算
                  </label>
                  <select
                    id="budget"
                    v-model="form.budget"
                    class="form-input"
                  >
                    <option value="">選択してください</option>
                    <option value="under-50k">5万円未満</option>
                    <option value="50k-100k">5万円〜10万円</option>
                    <option value="100k-300k">10万円〜30万円</option>
                    <option value="300k-500k">30万円〜50万円</option>
                    <option value="over-500k">50万円以上</option>
                    <option value="discuss">要相談</option>
                  </select>
                </div>

                <!-- Message -->
                <div>
                  <label for="message" class="block text-sm font-medium text-primary-700 mb-2">
                    プロジェクト詳細・ご要望 <span class="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    v-model="form.message"
                    required
                    rows="6"
                    class="form-input resize-none"
                    placeholder="プロジェクトの詳細、ご要望、スケジュール等をお聞かせください..."
                  ></textarea>
                </div>

                <!-- Submit Button -->
                <div class="pt-4">
                  <button
                    type="submit"
                    :disabled="isSubmitting"
                    class="w-full btn-primary flex items-center justify-center"
                    :class="{ 'opacity-50 cursor-not-allowed': isSubmitting }"
                  >
                    <span v-if="!isSubmitting">送信する</span>
                    <span v-else class="flex items-center">
                      <div class="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      送信中...
                    </span>
                  </button>
                </div>

                <!-- Demo Notice -->
                <div class="bg-accent-50 border border-accent-200 rounded-lg p-4">
                  <div class="flex items-start">
                    <AlertTriangle class="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div class="text-sm">
                      <p class="text-accent-800 font-medium mb-1">デモサイトについて</p>
                      <p class="text-accent-700">
                        これはデモ用のお問い合わせフォームです。実際の送信処理は行われません。
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <!-- Contact Info -->
          <div class="animate-fade-in" style="animation-delay: 0.2s;">
            <div class="space-y-8">
              <!-- Contact Details -->
              <div>
                <h2 class="text-2xl font-semibold text-primary-800 mb-6">
                  連絡先情報
                </h2>
                
                <div class="space-y-6">
                  <div class="flex items-start space-x-4">
                    <div class="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail class="w-6 h-6 text-secondary-600" />
                    </div>
                    <div>
                      <h3 class="font-semibold text-primary-800 mb-1">メール</h3>
                      <p class="text-primary-600">demo@content-creators-workshop.com</p>
                      <p class="text-sm text-primary-500">24時間以内に返信いたします</p>
                    </div>
                  </div>

                  <div class="flex items-start space-x-4">
                    <div class="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageSquare class="w-6 h-6 text-accent-600" />
                    </div>
                    <div>
                      <h3 class="font-semibold text-primary-800 mb-1">チャット</h3>
                      <p class="text-primary-600">Slack / Discord 対応</p>
                      <p class="text-sm text-primary-500">プロジェクト期間中のコミュニケーション</p>
                    </div>
                  </div>

                  <div class="flex items-start space-x-4">
                    <div class="w-12 h-12 bg-genre-tech/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Github class="w-6 h-6 text-genre-tech" />
                    </div>
                    <div>
                      <h3 class="font-semibold text-primary-800 mb-1">GitHub</h3>
                      <p class="text-primary-600">技術プロジェクトの場合</p>
                      <p class="text-sm text-primary-500">コード管理・レビュー対応</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Working Hours -->
              <div class="bg-primary-50 rounded-xl p-6">
                <h3 class="text-lg font-semibold text-primary-800 mb-4 flex items-center">
                  <Clock class="w-5 h-5 mr-2 text-secondary-500" />
                  対応時間
                </h3>
                <div class="space-y-2 text-sm">
                  <div class="flex justify-between">
                    <span class="text-primary-600">平日</span>
                    <span class="text-primary-800 font-medium">9:00 - 18:00</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-primary-600">土日祝</span>
                    <span class="text-primary-800 font-medium">要相談</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-primary-600">緊急対応</span>
                    <span class="text-primary-800 font-medium">24時間</span>
                  </div>
                </div>
              </div>

              <!-- Response Time -->
              <div class="bg-secondary-50 rounded-xl p-6">
                <h3 class="text-lg font-semibold text-primary-800 mb-4 flex items-center">
                  <Zap class="w-5 h-5 mr-2 text-accent-500" />
                  レスポンス目安
                </h3>
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-primary-600">初回返信</span>
                    <span class="px-2 py-1 bg-secondary-100 text-secondary-700 rounded-full text-xs font-medium">
                      24時間以内
                    </span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-primary-600">お見積り</span>
                    <span class="px-2 py-1 bg-accent-100 text-accent-700 rounded-full text-xs font-medium">
                      2-3営業日
                    </span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-primary-600">制作開始</span>
                    <span class="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">
                      契約後即日
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-padding bg-primary-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
            よくある質問
          </h2>
          <p class="text-lg text-primary-600">
            お問い合わせ前にご確認ください
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="space-y-4">
            <div v-for="(faq, index) in faqs" :key="index" 
                 class="bg-white rounded-xl shadow-sm animate-fade-in"
                 :style="`animation-delay: ${index * 0.1}s`">
              <button
                @click="toggleFaq(index)"
                class="w-full text-left p-6 flex items-center justify-between hover:bg-primary-25 transition-colors duration-200"
              >
                <h3 class="font-semibold text-primary-800 pr-4">{{ faq.question }}</h3>
                <ChevronDown 
                  class="w-5 h-5 text-primary-600 transition-transform duration-200"
                  :class="{ 'rotate-180': faq.isOpen }"
                />
              </button>
              <div v-show="faq.isOpen" class="px-6 pb-6">
                <p class="text-primary-600 leading-relaxed">{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-gradient-to-r from-primary-800 to-secondary-600">
      <div class="container-custom text-center">
        <div class="max-w-3xl mx-auto text-white">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            一緒に素晴らしいコンテンツを作りましょう
          </h2>
          <p class="text-xl mb-8 opacity-90">
            あなたのビジネスに価値をもたらすコンテンツ制作をお手伝いします
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:demo@content-creators-workshop.com" 
               class="inline-flex items-center justify-center px-6 py-2 bg-accent-500 hover:bg-accent-600 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105">
              <Mail class="w-4 h-4 mr-2" />
              メールで相談
            </a>
            <a href="#" class="inline-flex items-center justify-center px-6 py-2 bg-white/10 text-white border border-white rounded-lg font-medium hover:bg-white hover:text-primary-800 transition-all duration-300 hover:scale-105">
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
import { 
  AlertTriangle, Mail, MessageSquare, Github, Clock, Zap, ChevronDown
} from 'lucide-vue-next'

// Meta tags
useHead({
  title: 'お問い合わせ - Content Creator\'s Workshop',
  meta: [
    { name: 'description', content: 'プロジェクトのご相談・お問い合わせはこちら' }
  ]
})

// Form data
const form = reactive({
  name: '',
  email: '',
  company: '',
  projectType: '',
  budget: '',
  message: ''
})

const isSubmitting = ref(false)

// FAQ data
const faqs = reactive([
  {
    question: '制作期間はどのくらいですか？',
    answer: '記事の長さや内容により異なりますが、ショート記事は2-3日、ミディアム記事は1週間、ロング記事は2-3週間が目安です。',
    isOpen: false
  },
  {
    question: '修正対応は何回まで可能ですか？',
    answer: '基本的に3回まで無料で修正対応いたします。大幅な方向性変更の場合は別途ご相談となります。',
    isOpen: false
  },
  {
    question: 'SEO対策は含まれますか？',
    answer: 'はい、キーワード選定から内部SEO対策まで標準で対応しております。',
    isOpen: false
  },
  {
    question: '技術系の記事も対応可能ですか？',
    answer: 'IT・Web系の技術記事やドキュメント制作も対応可能です。GitHubでの管理も承ります。',
    isOpen: false
  },
  {
    question: '料金体系を教えてください',
    answer: '文字数や内容により異なります。ショート記事2-5万円、ミディアム記事5-15万円、ロング記事15-30万円が目安です。',
    isOpen: false
  }
])

// Methods
const handleSubmit = async () => {
  isSubmitting.value = true
  
  // Demo simulation
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  alert('デモサイトのため、実際の送信は行われませんでした。ありがとうございました！')
  
  // Reset form
  Object.keys(form).forEach(key => {
    form[key] = ''
  })
  
  isSubmitting.value = false
}

const toggleFaq = (index) => {
  faqs[index].isOpen = !faqs[index].isOpen
}
</script>

<style scoped>
.form-input {
  @apply w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-200 bg-white;
}

.form-input:focus {
  @apply outline-none shadow-lg;
}
</style>