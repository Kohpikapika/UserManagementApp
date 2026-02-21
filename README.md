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
- Vue 3 + Vite
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

## 🧠 設計のポイント

### 1. 新規 / 編集を同一コンポーネントで実装

- ルーティングの `id` パラメータにより  
  **新規作成（id = new）/ 編集** を判定
- `isNew` フラグを用いて UI・処理を分岐

```js
const isNew = computed(() => props.id === 'new')
```

### 2. fields 定義から form を動的生成
入力項目を fields に集約し、  
フォーム状態・バリデーション・表示制御を一元管理しています。
```js
const form = reactive(
  Object.fromEntries(
    fields.map(field => [
      field.key,
      user?.[field.key] ?? ''
    ])
  )
)
```
これにより、  
項目追加時の修正箇所を最小限に抑える設計にしています。

### 3. 状態管理の一本化
- フォームの状態は`form`に集約
- 個別の`ref(name, email...)`は持たず、状態の二重管理を避ける構成

---

## 📁 ディレクトリ構成（抜粋）
```txt
src/
├─ components/
│  ├─ Toast.vue
│  └─ UserDetailItem.vue
├─ views/
│  ├─ UsersList.vue
│  ├─ UserDetail.vue
│  └─ UserEdit.vue
├─ stores/
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

