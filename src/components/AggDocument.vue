<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  data: {
    type: Number,
    reqired: true,
  },
});
</script>

<template>
  <h2>{{ title }}</h2>
  <h3>{{ data }}</h3>
</template>

<style scoped></style>
