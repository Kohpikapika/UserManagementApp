<template>
  <transition name="fade">
    <div
      v-if="visible"
      class="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
    >
      <div
        class="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg pointer-events-auto"
      >
        {{ message }}
      </div>
    </div>
  </transition>
</template>

<script setup>
defineProps({
  message: String,
  visible: Boolean,
})
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>