<template>
  <div class="max-w-xl mx-auto p-6">
    <div class="flex">
      <h1 class="text-2xl font-bold mb-4">ユーザ一覧</h1>
      <div class="grow"></div>
      <router-link
        to="/users/new"
        class="inline-block mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        + 新規作成
      </router-link>
    </div>

    <div class="space-y-3">
      <div
        v-for="user in users"
        :key="user.id"
        class="flex items-center gap-4 p-3 border rounded-lg shadow-sm hover:bg-gray-50 transition"
      >
        <!-- 丸アイコン -->
        <div class="flex-shrink-0">
          <div class="w-12 h-12 bg-gray-400 text-white rounded-full flex items-center justify-center text-lg font-bold">
            {{ user.name.slice(0, 1) }}
          </div>
        </div>

        <!-- ユーザー情報 -->
        <div class="flex-1 min-w-0">
          <p class="font-medium text-gray-900 truncate">{{ user.name }}</p>
          <p class="text-gray-500 truncate text-sm">{{ user.email }}</p>
          <p class="text-gray-400 text-xs">更新: {{ user.updatedAt }}</p>
        </div>

        <!-- アクションボタン -->
        <div class="flex gap-2">
          <!-- 詳細ボタン -->
          <button
            @click="viewDetails(user.id)"
            class="w-10 h-10 flex items-center justify-center rounded-full bg-orange-300 hover:bg-orange-400 transition"
            title="詳細"
          >
            <book-open class="w-5 h-5 text-gray-700" />
          </button>

          <!-- 編集ボタン -->
          <button
            @click="editUser(user.id)"
            class="w-10 h-10 flex items-center justify-center rounded-full text-white bg-purple-500 hover:bg-purple-600 transition"
            title="編集"
          >
            <LucideEdit2 class="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { users } from '../stores/users'
import { Edit2 as LucideEdit2, BookOpen } from 'lucide-vue-next'

const router = useRouter()

// ボタン押下時のアクション
function viewDetails(id) {
  router.push(`/users/${id}`)
}

function editUser(id) {
  router.push(`/users/${id}/edit`)
}
</script>
