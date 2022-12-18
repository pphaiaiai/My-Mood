<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'
import { query, collection, getDocs, onSnapshot,collectionGroup } from 'firebase/firestore'
import db from './firebase/init.js'
import UserList from './components/UserList.vue'

const users = ref([])
const mood = ref([])

async function getOnSnapshotUsers(){
  const usersRef = collection(db, "users")
  const querySnap = query(usersRef)
  const unsubscribe = onSnapshot(querySnap, (qrySnapshot)=> {
    users.value = []
    qrySnapshot.forEach((doc) => {
      let data = doc.data() 
      data.id = doc.id 
      users.value.push(data)
      console.log('Getting a user : '+data.id)
    })
  })
}

  async function getOnSnapshotMood(){
  const moodRef = collection(db, "mood")
  const querySnap = query(moodRef)
  const unsubscribe = onSnapshot(querySnap, (qrySnapshot)=> {
    mood.value = []
    qrySnapshot.forEach((doc) => {
      let data = doc.data() 
      data.id = doc.id 
      mood.value.push(data)
      console.log("mood",data.mood)
    })
  })
}

onMounted(() => {
    getOnSnapshotUsers(),
    getOnSnapshotMood() 
})
</script>

<template>
  <div>
    <div>
      <UserList :users="users" />
    </div>
    <div>
      <h3>Mood List</h3>
      <ul>
        <li v-for="mood in mood" :key="mood.id">
          <RouterLink :to="`/mood/${mood.mood}`">{{mood.mood}}</RouterLink>
        </li>
      </ul> 
    </div>
    <div>
    <h2>Reports</h2>
    <RouterLink to="/query/1">1. Diary ที่มีคนคอมเมนต์มากที่สุด</RouterLink><br>
    <RouterLink to="/query/2">2. Diary ที่มีคนคอมเมนต์มากกว่า 1 คน</RouterLink><br>
    <RouterLink to="/query/3">3. Diary ที่เป็น private</RouterLink><br>
    <RouterLink to="/query/4">4. จำนวน Diary ที่เป็น Public</RouterLink><br>
    <RouterLink to="/query/5">5. Diary ถูกเขียนในเดือนตุลาคม</RouterLink><br>
    <RouterLink to="/query/6">6. จำนวน mood ที่เป็น sad</RouterLink> <br>
    <RouterLink to="/query/7">7. จำนวน user ที่ใช้ชื่อว่า Tarathep</RouterLink><br>
    <RouterLink to="/query/8">8. Diary ที่เป็น Public แต่ไม่มีคนคอมเมนต์เลย</RouterLink><br>
    <RouterLink to="/query/9">9. Diary ของ kittipat ที่เป็น public</RouterLink><br>
    <RouterLink to="/query/10">10. จำนวนประวัติการรักษาประเภทรักษาโรค</RouterLink><br>
    </div>

  </div>
  <div class="content">
    <RouterView />
  </div>
</template>

<style scoped>

</style>
