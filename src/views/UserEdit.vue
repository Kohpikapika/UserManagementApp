<template>
  <div class="max-w-xl mx-auto">
    <h1 class="text-2xl font-bold mb-4">
      {{ title }}
    </h1>

    <form @submit.prevent="save">
      <div
        v-for="field in fields"
        :key="field.key"
        class="mb-4"
      >
        <label class="block text-sm font-medium mb-1">
          {{ field.label }}
          <span v-if="field.required" class="text-red-500">*</span>
        </label>

        <input
          v-model="form[field.key]"
          class="border rounded w-full px-2 py-1"
        />

        <p
          v-if="errors[field.key]"
          class="text-sm text-red-500 mt-1"
        >
          {{ errors[field.key] }}
        </p>
      </div>

      <div class="flex gap-3">
        <button
          type="submit"
          class="px-4 py-2 bg-blue-500 text-white rounded"
        >
          {{ saveLabel }}
        </button>

        <button
          type="button"
          @click="cancel"
          class="px-4 py-2 border rounded hover:bg-gray-50"
        >
          キャンセル
        </button>

        <button
          v-if="!isNew"
          type="button"
          @click="remove"
          class="px-4 py-2 bg-red-500 text-white rounded ml-auto"
        >
          削除
        </button>
      </div>
    </form>
  </div>
  <Toast
    :message="toastMessage"
    :visible="showToast"
  />
</template>

<script setup>
import { ref, computed, reactive } from 'vue'
import { useRouter } from 'vue-router'
import {
  getUserById,
  updateUser,
  addUser,
  deleteUser,
} from '../stores/users'
import Toast from '../components/Toast.vue'

const router = useRouter()

const props = defineProps({
  id: String,
})

const isNew = computed(() => props.id === 'new')

const title = computed(() =>
  isNew.value ? 'ユーザー新規作成' : 'ユーザー編集'
)

const saveLabel = computed(() =>
  isNew.value ? '登録' : '保存'
)

const user = isNew.value ? null : getUserById(props.id)

const fields = [
  {
    key: 'name',
    label: '名前',
    required: true,
  },
  {
    key: 'email',
    label: 'メール',
    required: false,
  },
  {
    key: 'address',
    label: '住所',
    required: false,
  },
]

const form = reactive(
  Object.fromEntries(
    fields.map(field => [
      field.key,
      user?.[field.key] ?? ''
    ])
  )
)

const showToast = ref(false)
const toastMessage = ref('')

const errors = reactive({})


function save() {
  if (!validate()) return

  if (isNew.value) {
    addUser({ ...form })
    toastMessage.value = '新規登録しました'
  } else {
    updateUser(props.id, { ...form })
    toastMessage.value = '保存しました'
  }

  showToast.value = true

  setTimeout(() => {
    showToast.value = false
    router.push('/users')
  }, 1000)
}

function remove() {
  const ok = confirm('本当に削除しますか？')
  if (!ok) return

  deleteUser(props.id)

  toastMessage.value = '削除しました'
  showToast.value = true

  setTimeout(() => {
    showToast.value = false
    router.push('/users')
  }, 1000)
}

function cancel() {
  if (window.history.length > 1) {
    router.back()
  } else {
    router.push('/users')
  }
}

function validate() {
  let isValid = true

  fields.forEach(field => {
    errors[field.key] = ''

    if (field.required && !form[field.key].trim()) {
      errors[field.key] = `${field.label}は必須です`
      isValid = false
    }
  })

  return isValid
}
</script>
