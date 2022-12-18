<script setup>
import { doc, updateDoc, increment } from 'firebase/firestore'
import db from '../firebase/init.js'
import CommentItem from "../components/CommentItem.vue"
import NewComment from "../components/NewComment.vue"

const props = defineProps({
  post: {
    type: Object,
    required: true,
  }
});

const emit = defineEmits(['reload-post'])

async function updateCountPost(){

  const docRef = doc(db,"posts",props.post.id)
  await updateDoc(docRef,{
    countComment: increment(1)
  })
  emit('reload-post')
}

</script>

<template>
  <div class="box">
    {{post.body}}
    <h4 class="title">comments ({{post.countComment}})</h4>
    <NewComment :docId="post.id" @add-comment="updateCountPost" />
    <CommentItem v-for="comment in post.comments" :comment="comment" :key="comment.id" />
  </div>
</template>

<style scoped>
  .box {
    border: 1px solid grey;
    padding: 5px ;
    margin:  5px ;
    border-radius: 5px ;
  }
  .title {
    font-style: italic ;
    color: hsla(160, 100%, 37%, 1);
  }
</style>