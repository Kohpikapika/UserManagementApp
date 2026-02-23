<template>
  <transition name="fade">
    <div
      v-if="visible"
      class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
    >
      <div class="bg-white rounded-lg shadow-lg p-6 w-80 max-w-full">
        <p class="text-gray-800 mb-4">{{ message }}</p>
        <div class="flex justify-end gap-3">
          <button
            @click="cancelClicked"
            class="px-4 py-2 border rounded hover:bg-gray-100"
          >
            キャンセル
          </button>
          <button
            @click="confirmClicked"
            class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue'

const props = defineProps({
  message: String,
  visible: Boolean,
})

const emit = defineEmits(['confirm', 'cancel'])

function confirmClicked() {
  emit('confirm')
}

function cancelClicked() {
  emit('cancel')
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>