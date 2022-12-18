<script setup>
import { ref } from 'vue'
import { collection, addDoc } from 'firebase/firestore'
import db from '../firebase/init.js'

const name = ref('')
const email = ref('')
const comment = ref('')
const stars = ref('')

const props = defineProps({
  docId: {
    type: String,
    required: true,
  }
});

const emit = defineEmits(['add-comment'])

async function addComment(){
    const commentRef = collection(db,"posts",props.docId,"comments")
    const docRef = await addDoc(commentRef,{
      name: name.value,
      email: email.value,
      comment: comment.value,
      cmtdate: new Date(),
      stars: stars.value
    })
    emit('add-comment')
}
</script>

<template>
    <form class="form" @submit.prevent="addComment">
        <label for="name">Name : </label>
        <input id="name" type="text" v-model="name" required>
        <label for="email">Email : </label>
        <input id="email" type="email" v-model="email" required>
        <label for="stars">Stars : </label>
        <select id="stars" v-model="stars" required>
            <option value="1">1</option>
            <option value="1.5">1.5</option>
            <option value="2">2</option>
            <option value="2.5">2.5</option>
            <option value="3">3</option>
            <option value="3">3.5</option>
            <option value="4">4</option>
            <option value="4.5">4.5</option>
            <option value="5">5</option>
        </select>
        <label for="comment">Comment : </label>
        <textarea v-model="comment" rows="5" required></textarea>
        <button class="button" type="submit">Send</button>
    </form>
</template>

<style scoped>
    .form {
        display: flex ;
        flex-direction: column ;
    }
    .button {
        color: white ;
        background-color: rgb(0,0,255) ;
        padding: 5px ;
    }
</style>
