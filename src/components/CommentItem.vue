<script setup>
defineProps({
  comment: {
    type: Object,
    required: true,
  }
});
</script>

<template>
    <div class="comment">
      <p class="commenter">
        <span class="label">Name : </span><span>{{comment.name}}</span>
        <span class="label">Stars : </span><span>{{comment.stars}}</span>
        <span class="label">Date : </span><span>{{comment.cmtdate.toDate()}}</span>
      </p>
      <p>{{comment.comment}}</p>
    </div>
</template>

<style scoped>
  .comment {
    margin-left: 10px ;
    padding: 5px ;
  }
  .commenter {
    display: grid ;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 5fr ;
    font-size: smaller ;
    font-style: italic ;
  }
  .content {
    background-color: rgb(100,100,100) ;
  }
  .label {
    color: hsla(160, 100%, 37%, 1);
  }
</style>