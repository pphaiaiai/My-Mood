<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import {
  collection,
  query,
  where,
  getDocs,
  onSnapshot,
  doc,
  getDoc,
} from "firebase/firestore";
import db from "../firebase/init.js";

const user = ref("");
const diaries = ref([]);
const route = useRoute();

async function getDiaries() {
  user.value = route.params.user;

  const diaryRef = collection(db, "diary");
  const diaryQry = query(diaryRef, where("username", "==", user.value));
  const querySnapshot = await getDocs(diaryQry);

  diaries.value = [];
  querySnapshot.forEach(async (doc) => {
    let data = doc.data();
    data.id = doc.id;
    diaries.value.push(data);
    console.log(data);
  });
}

watch(() => route.params.user, getDiaries);

onMounted(() => {
  getDiaries();
});
</script>

<template>
  <h3>Diary : {{ user }}</h3>
  <div v-for="diary in diaries" :key="diary.id" class="list" >
    <div class="diary">
      <h4>{{ diary.title }}</h4>
      <p>{{ diary.mood }} (mood)</p>
      <p>{{ diary.description }}</p>
      <p>{{ new Date(diary.created_at.seconds * 1000) }}</p>
    </div>
    <div class="comment">
      <h4>Comment ({{ diary.is_public ? "public" : "private" }}) </h4>
      <div v-for="favorite in diary.favorite.comment" :key="favorite.id">
        <p>{{ favorite.count }}</p>
        <p>{{ favorite.username }} : {{ favorite.comment }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter&family=Noto+Sans+Thai&display=swap");
.body {
  font-family: "Inter", "Noto Sans Thai";
}

.list {
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
}

.diary {
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
}
</style>
