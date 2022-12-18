<script setup>
import { RouterLink, RouterView } from 'vue-router'

defineProps({
  users: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h3>User List</h3>
    <ul>
        <li v-for="user in users" :key="user.id">
            <RouterLink :to="`/diaries/${user.username}`">{{user.username}}</RouterLink>
        </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
