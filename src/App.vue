<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'
import { query, collection, getDocs, onSnapshot,collectionGroup } from 'firebase/firestore'
import db from './firebase/init.js'
import UserList from './components/UserList.vue'

const users = ref([])

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

// async function getCommentsCollection(){
//   const commentsRef = collectionGroup(db,"comments") 
//   const qry = query(commentsRef)
//   const querySnap = await getDocs(qry)
//   console.log('-----Get Comments Collection------')
//   querySnap.forEach( (doc) => {
//     console.log(doc.ref) // doc ref 
//     console.log(doc.ref.id) // comment id
//     console.log(doc.ref.path) // ref path of comment
//     console.log(doc.ref.parent) // collection ref
//     console.log(doc.ref.parent.id) // parent (comment) id
//     console.log(doc.ref.parent.path) // path of the parent (comment) collection
//     console.log(doc.ref.parent.parent)  // (doc ref) parent (post) document of parent (comment) collection
//     console.log(doc.ref.parent.parent.id) // (doc id) post
//   })
// }

onMounted(() => {
    getOnSnapshotUsers() 
    // getCommentsCollection()
})
</script>

<template>
  <div>
    <div>
      <UserList :users="users" />
    </div>
  </div>
  <div class="content">
    <RouterView />
  </div>
</template>

<style scoped>

</style>
