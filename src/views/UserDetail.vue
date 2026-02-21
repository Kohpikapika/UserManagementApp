<template>
  <div class="max-w-xl mx-auto">
    <h1 class="text-2xl font-bold mb-4">
      ユーザー詳細
    </h1>

    <div class="space-y-4 border rounded p-4 bg-white">
      <UserDetailItem label="ID">
        {{ user.id }}
      </UserDetailItem>

      <UserDetailItem label="名前">
        {{ user.name }}
      </UserDetailItem>

      <UserDetailItem label="メール">
        {{ user.email }}
      </UserDetailItem>

      <UserDetailItem label="登録日時">
        {{ user.createdAt }}
      </UserDetailItem>

      <UserDetailItem label="更新日時">
        {{ user.updatedAt }}
      </UserDetailItem>
    </div>

    <!-- ボタンエリア -->
    <div class="mt-6 flex gap-3">
      <router-link
        :to="{ name: 'UserEdit', params: { id: user.id } }"
        class="px-4 py-2 bg-blue-500 text-white rounded"
      >
        編集
      </router-link>

      <router-link
        to="/users"
        class="px-4 py-2 border rounded"
      >
        一覧に戻る
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { getUserById } from '../stores/users'
import UserDetailItem from '../components/UserDetailItem.vue'


const route = useRoute()
const user = getUserById(route.params.id)
</script>
