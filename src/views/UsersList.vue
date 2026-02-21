<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">ユーザ一覧</h1>
    <router-link
      to="/users/new"
      class="inline-block mb-4 px-4 py-2 bg-blue-500 text-white rounded"
    >
      + 新規作成
    </router-link>
    <table class="min-w-full border border-gray-300">
      <thead class="bg-gray-100">
        <tr>
          <th class="border px-3 py-2 text-left">ID</th>
          <th class="border px-3 py-2 text-left">名前</th>
          <th class="border px-3 py-2 text-left">メールアドレス</th>
          <th class="border px-3 py-2 text-left">更新日時</th>
          <th class="border px-3 py-2">Actions</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="user in users"
          :key="user.id"
          class="hover:bg-gray-50"
        >
          <td class="border px-3 py-2">{{ user.id }}</td>
          <td class="border px-3 py-2">{{ user.name }}</td>
          <td class="border px-3 py-2">{{ user.email }}</td>
          <td class="border px-3 py-2">{{ user.updatedAt }}</td>
          <td class="border px-3 py-2 text-center space-x-2">
            <router-link
              :to="{ name: 'UserDetail', params: { id: user.id } }"
              class="text-blue-600 hover:underline"
            >
              詳細
            </router-link>

            <router-link
              :to="{ name: 'UserEdit', params: { id: user.id } }"
              class="text-green-600 hover:underline"
            >
              編集
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { users } from '../stores/users'
</script>
