<template>
  <div>
    <label class="text-sm text-gray-500">{{ label }}</label>
    <p class="font-mono"><slot /></p>
  </div>
</template>

<script setup>
defineProps({
  label: String,
})
</script>