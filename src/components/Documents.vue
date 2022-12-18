<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  data: {
    type: Array,
    reqired: true,
  },
});
</script>

<template>
  <h2>{{ title }}</h2>
  <ol>
    <li v-for="(doc, index) in data" >
      {{ doc.username }} : {{ doc.title }}
      <p>{{ doc.description }}</p>
    </li>
  </ol>
  <p v-if="data.length === 0">No data</p>
</template>

<style scoped></style>
