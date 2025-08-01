# Content Creator's Workshop

## 📋 概要

「Content Creator's Workshop」は、フリーランスライター向けのデモポートフォリオサイトです。このプロジェクトは架空のWebサイトであり、実際のライティングサービスは提供していません。

コンセプトは「読者の心に響くコンテンツを創造」をテーマに、プロフェッショナルなライターとしての実績と専門性を効果的にアピールできるポートフォリオサイトとして設計されています。

単なる静的サイトではなく、Nuxt Content (Markdown CMS) を活用した動的な記事管理機能を実装しており、オウンドメディアとしての展開も可能です。

## 🛠️ 使用技術

- Vue.js 3
- Nuxt.js 3
- Nuxt Content (Markdown CMS)
- HTML5
- CSS3
  - Tailwind CSS
  - Flexbox
  - CSS Grid
  - CSS Animation
  - レスポンシブデザイン
- JavaScript
- Lucide Vue (アイコンライブラリ)
- Vercel (デプロイ)

## 🔒 検索エンジン対策

- `robots.txt` によるインデックス防止
- `meta robots` タグによる補完的な制御
- 架空サイトであることの明示的な記載
- デモバナーによる視覚的な注意喚起

これらを設置することで、架空のポートフォリオサイトが実在のサービスと誤認されることを防止しています。

## ✨ 特徴

- **動的記事管理**: Nuxt Contentを使用したMarkdownベースの記事管理
- **レスポンシブヒーローセクション**: 左右バランスの取れた魅力的なファーストビュー
- **実績の可視化**: 記事数、ジャンル数、総執筆文字数の動的表示
- **記事カテゴリー分類**: ショート、ミディアム、ロングの文字数別分類
- **ジャンル特化表示**: 健康、美容、グルメ、ライフハックなど多様なジャンル対応
- **モダンなデザイン**: グラデーション背景とクリーンなレイアウト
- **アニメーション効果**: フェードイン、スライドアップによる動的な表示
- **SEO最適化**: 適切なメタタグとサイトマップ設定

## 📱 レスポンシブデザイン

- **モバイル（～640px）**
  - シングルカラムレイアウト
  - コンパクトなヒーローセクション
  - タッチフレンドリーなナビゲーション
- **タブレット（641px～1024px）**
  - 2カラムの記事グリッド
  - 調整されたヒーローセクション
- **デスクトップ（1025px～）**
  - 3カラムの記事グリッド
  - フルサイズヒーローセクション
  - 横並びレイアウトの最適化

## 🎨 配色

- **プライマリーカラー**: `#1e40af` (ディープブルー)
- **セカンダリーカラー**: `#7c3aed` (パープル)
- **アクセントカラー**: `#f59e0b` (アンバー)
- **カテゴリーカラー**:
  - ショート記事: `#10b981` (エメラルド)
  - ミディアム記事: `#f59e0b` (アンバー)
  - ロング記事: `#ef4444` (レッド)
- **ジャンルカラー**:
  - マーケティング: `#8b5cf6` (バイオレット)
  - ライフスタイル: `#06b6d4` (シアン)
  - ビジネス: `#84cc16` (ライム)
  - テクノロジー: `#f97316` (オレンジ)

## 📂 ディレクトリ構造

```
content-creators-workshop/
├── .gitignore                      # Git除外設定
├── app.vue                         # メインアプリファイル
├── LICENSE                         # ライセンス
├── nuxt.config.ts                  # Nuxt設定
├── package-lock.json               # パッケージロック
├── package.json                    # プロジェクト設定
├── README.md                       # プロジェクト説明
├── tailwind.config.js              # Tailwind CSS設定
├── vercel.json                     # Vercel設定
├── comprehensive_deployment_guide.md # デプロイ手順書
├── directory_structure.txt         # ディレクトリ構造ファイル
│
├── assets/
│   └── css/
│       └── main.css                # カスタムCSS
│
├── components/
│   ├── AppHeader.vue               # ヘッダーコンポーネント
│   ├── AppFooter.vue               # フッターコンポーネント
│   └── ArticleCard.vue             # 記事カードコンポーネント
│
├── content/
│   ├── articles/                   # 記事ファイル（Markdown）
│   │   ├── 5-minute-stretch-routine.md         # ストレッチ記事
│   │   ├── digital-marketing-strategy-guide.md # デジタルマーケティング記事
│   │   ├── home-cafe-recipes.md                # おうちカフェ記事
│   │   ├── sns-marketing-tips.md               # SNSマーケティング記事
│   │   └── spring-room-makeover.md             # 春の模様替え記事
│   └── data/
│       ├── articles-meta.json      # 記事メタデータ
│       └── profile.json            # プロフィールデータ
│
├── layouts/
│   └── default.vue                 # デフォルトレイアウト
│
├── pages/
│   ├── index.vue                   # トップページ（改善版ヒーローセクション）
│   ├── about.vue                   # アバウトページ
│   ├── contact.vue                 # お問い合わせページ
│   ├── portfolio/
│   │   └── index.vue               # ポートフォリオページ
│   └── article/
│       └── [slug].vue              # 記事詳細ページ
│
├── public/
│   ├── images/
│   │   └── hero-workspace.jpg      # ヒーローセクション画像
│   └── robots.txt                  # クローラー制御
```

## 🌟 実装したページ・セクション

### **トップページ (index.vue)**
1. **ヒーローセクション**: 改善されたレスポンシブデザインと統計表示
2. **Featured Works**: 最新記事3件の動的表示
3. **統計セクション**: カテゴリー別記事数の可視化
4. **専門分野**: 取り扱いジャンルのスキルタグ表示
5. **CTA セクション**: お問い合わせへの誘導

### **ポートフォリオページ (/portfolio)**
- 記事一覧のカード表示
- ジャンル・カテゴリーフィルタリング
- 検索機能

### **記事詳細ページ (/article/[slug])**
- Markdownレンダリング
- 記事メタ情報表示
- 関連記事の提案
- 5記事の個別URL対応:
  - `/article/5-minute-stretch-routine`
  - `/article/digital-marketing-strategy-guide`
  - `/article/home-cafe-recipes`
  - `/article/sns-marketing-tips`
  - `/article/spring-room-makeover`

### **その他のページ**
- **About**: プロフィールと経歴
- **Contact**: お問い合わせフォーム

## ⭐ デザイン上のこだわり

- **視覚的なバランス**: ヒーローセクションの左右コンテンツバランス最適化
- **動的なデータ表示**: 実際の記事データに基づく統計の自動計算
- **直感的なナビゲーション**: 分かりやすいページ構成とリンク設計
- **アニメーション効果**: 控えめで効果的なフェードイン・スライドアニメーション
- **タイポグラフィ**: 読みやすさを重視したフォントサイズとライン高の設定
- **カラーシステム**: 統一感のあるブランドカラーの適用

## 📝 記事管理システム

### **Markdownベースのコンテンツ管理**
```markdown
---
title: "記事のタイトル"
description: "記事の要約"
category: "short/medium/long"
wordCount: 2500
genre: ["健康", "ライフハック"]
clientType: "メディア"
publishDate: "2024-03-30"
slug: "article-url-slug"
thumbnail: "/images/thumbnails/article.jpg"
---

# 記事内容

Markdownで記述された記事本文...
```

### **記事カテゴリー別整理（将来対応）**
- `content/articles/short/` - ショート記事（200-1,000文字）
- `content/articles/medium/` - ミディアム記事（1,000-5,000文字）
- `content/articles/long/` - ロング記事（5,000文字以上）

### **現在の記事構成**
- **総記事数**: 5記事（すべて `content/articles/` 直下に配置）
- **記事ファイル**:
  1. `5-minute-stretch-routine.md` - ストレッチ記事
  2. `digital-marketing-strategy-guide.md` - デジタルマーケティング記事
  3. `home-cafe-recipes.md` - おうちカフェ記事
  4. `sns-marketing-tips.md` - SNSマーケティング記事
  5. `spring-room-makeover.md` - 春の模様替え記事

### **自動化された機能**
- 記事数の自動集計
- ジャンル数の自動カウント
- 総文字数の自動計算
- 最新記事の自動抽出
- カテゴリー別分類の自動処理

## 🔧 開発・デプロイ環境

### **ローカル開発**
```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev

# 本番ビルド
npm run generate
```

### **Vercelデプロイ**
- GitHub連携による自動デプロイ
- プレビュー機能付きのPull Request
- カスタムドメイン設定対応

## 📊 今後の改善点

- **記事カテゴリー整理**: カテゴリー別フォルダへの記事移動
- **プラグイン追加**: 機能拡張のためのプラグイン開発
- **コンテンツ管理**: 管理画面の追加によるノンコーダー対応
- **SEO強化**: サイトマップ、構造化データの追加
- **パフォーマンス最適化**: 画像最適化、キャッシュ戦略の改善
- **アクセシビリティ**: WCAG準拠の強化
- **多言語対応**: i18nの実装
- **ダークモード**: テーマ切り替え機能の追加
- **検索機能**: 記事検索とフィルタリングの強化
- **画像ギャラリー**: サムネイル画像の追加とギャラリー機能

## 📈 技術的な学習ポイント

- **Nuxt Content**: MarkdownベースのヘッドレスCMS実装
- **Vue 3 Composition API**: リアクティブなデータ管理
- **Tailwind CSS**: ユーティリティファーストのCSS設計
- **レスポンシブデザイン**: モバイルファーストアプローチ
- **Vercel**: モダンなJamstackデプロイメント
- **Git**: バージョン管理とコラボレーション
- **プロジェクト構造設計**: スケーラブルなフォルダ構成
- **静的サイト生成**: Nuxt 3のSSG機能活用

## 📜 ライセンス

このプロジェクトは架空のポートフォリオサイトです。  
コードは[MITライセンス](LICENSE)の下で公開しています。これは以下を意味します：

- 自由に使用、修正、配布可能（商用利用も含む）
- 著作権表示とライセンス表示を維持すること
- 作者は法的責任を負わない

※ 画像ファイルについては適切な権利を持つものを使用し、同様にMITライセンスを適用します。

## 👨‍💻 作者

[あなたのGitHubユーザー名]

デモサイト: https://content-creators-workshop.vercel.app

---

※ このプロジェクトは架空の練習用ポートフォリオサイトであり、実際のライティングサービスは提供していません。
