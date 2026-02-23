# ユーザ管理アプリ
Vue.js + Viteで作ったシンプルなユーザー管理アプリです。  
CRUD操作（作成・閲覧・更新・削除）ができ、フォームバリデーションやコンポーネント化も行っています。

デプロイ済みで、OGP対応もしているのでURLを共有したときにプレビュー画像が表示されます。

---

## デモ
https://usermanagementapp.pages.dev/

---

## OGP Preview
![App Preview](https://usermanagementapp.pages.dev/ogp.png)

---

## 🔧 技術スタック
- Vue 3（Composition API ベース） + Vite
- TailwindCSS
- Cloudflare Pages（デプロイ）
- OGP metaタグ（リンクプレビュー用）

---

## ✨ 機能
- ユーザー一覧表示
- ユーザー新規作成
- ユーザー編集
- ユーザー削除
- 入力必須項目バリデーション
- コンポーネント化による再利用可能なUI
- トースト通知表示

---

## 🧠 設計上工夫した点
- form と ConfirmModal（削除確認のモーダル） を分離し、submit事故を防止
- モバイル視点で table ではなくカード型UIを採用
- トーストを中央表示にして視認性を向上

---

## 📁 ディレクトリ構成（抜粋）
```txt
src/
├─ components/    # 再利用可能なUIコンポーネント
│  ├─ ConfirmModal.vue
│  ├─ Toast.vue
│  └─ UserDetailItem.vue
├─ views/         # 画面単位のコンポーネント
│  ├─ UsersList.vue
│  ├─ UserDetail.vue
│  └─ UserEdit.vue
├─ stores/        # ユーザー情報の状態管理
│  └─ users.js
└─ router/
```

---

## 🚀 セットアップ手順
```bash
npm install
npm run dev
```

---

## 📝 補足
本アプリは個人学習目的で作成しており、  
実務での保守性・拡張性を意識した設計を重視しています。

---

## 📌 今後の改善予定
- 入力項目の type 定義（input / textarea 切替）
- バリデーションロジックの composable 化
- API 連携（バックエンド接続）  
※ 学習段階を考慮し、現時点ではフロントエンド単体構成に留めています。
