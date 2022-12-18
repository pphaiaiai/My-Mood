<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from "vue-router"
import { collection, query, where, getDocs, onSnapshot,doc,getDoc } from "firebase/firestore"
import db from "../firebase/init.js"
import PostItem from "../components/PostItem.vue"

const user = ref("")
const username = ref("")
const posts = ref([])
const route = useRoute() 

async function getPosts(){
  user.value = route.params.user 

  // const userRef = doc(db,"users",user.value)
  // const userSnap = await getDoc(userRef)

  // if(userSnap.exists()){
  //   username.value = userSnap.data().firstname+" "+userSnap.data().lastname
  // }

  const postsRef = collection(db,"posts")
  const postsQry = query(postsRef,where("user","==",user.value))
  const querySnapshot = await getDocs(postsQry)

  posts.value = []
  querySnapshot.forEach( async (doc) => {
    let data = doc.data()
    data.id = doc.id 
    username.value = data.fullname
    const commentRef = collection(db,"posts",doc.id,"comments")
    const commentSnapshot = await getDocs(commentRef)
    data.comments = []
    commentSnapshot.forEach( (comment) => {
      let cmtdata = comment.data()
      cmtdata.id = comment.id
      data.comments.push(cmtdata)
    })
    posts.value.push(data)
    console.log(data)
  })
}

watch( () => route.params.user, getPosts)

onMounted(() => {
  getPosts() 
})

</script>

<template>
    <h3>Posts : {{username}}</h3>
    <PostItem v-for="post in posts" :post="post" :key="post.id" @reload-post="getPosts"/>
</template>

<style scoped>

</style>

