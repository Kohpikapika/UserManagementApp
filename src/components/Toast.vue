<template>
  <div
    v-if="visible"
    class="fixed bottom-4 right-4 bg-black text-white px-4 py-2 rounded shadow"
  >
    {{ message }}
  </div>
</template>

<script setup>
defineProps({
  message: String,
  visible: Boolean,
})
</script>