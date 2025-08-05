# prime-gym-website

このリポジトリは、情報工学の授業課題として作成した「Prime Gym」のWebサイトです。HTML・CSS・JavaScriptを用いて、ジムの紹介・プラン・アクセス・問い合わせ機能を備えた多ページ構成のレスポンシブサイトを制作しました。

---

## 🔗 リンク

https://medqo.github.io/prime-gym-website/

---

## 📁 ファイル構成
├── index.html # トップページ
├── about.html # ジムの紹介
├── program.html # プログラム紹介
├── location.html # アクセス情報（Google Map対応）
├── contact.html # お問い合わせフォーム（JavaScript処理あり）
├── join.html # プラン申し込み用ページ（モーダルフォーム）
├── css
│   └── style.css # サイト全体のスタイル
├── js
│   └── script.js # モーダル制御やフォーム処理のJavaScript
├── img
│   ├── about.png
│   ├── hero.png
│   ...
└── README.md # このファイル

---

## 💡 主な機能

- トップページに各セクションへのリンクを設置（ナビゲーションバー）
- JavaScriptによるプランの動的生成とモーダルでの申込み
- お問い合わせ・申し込み時に「サンクスメッセージ」表示
- locationページにアクセス情報・地図リンク掲載
- レスポンシブ対応（スマートフォン〜PC）

---

## 🛠️ 使用技術

- HTML5
- CSS3（Flexbox, カスタムレイアウト）
- JavaScript（バニラJS）

---

## 📌 工夫した点

- JavaScriptでモーダルフォームを制御し、フォーム送信後にモーダル内の表示を切り替えるよう実装
- カードデザインやフォームのレイアウト調整により、UI/UXの向上を図りました
- スマホ対応のためのレスポンシブ設計