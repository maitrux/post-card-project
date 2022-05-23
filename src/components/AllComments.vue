<script setup>
import Comment from "@/components/Comment.vue";
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="row">
    <div class="col-xs" v-for="comment in comments" :key="comment.id">
      <Comment 
      :email="comment.email"
      :body="comment.body"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  components: {
    Comment
  },
  data() {
    return {
      comments: []
    };
  },
  async created() {
    try {
      const postResposnse = await axios.get("https://jsonplaceholder.typicode.com/posts/" + 1 + "/comments");
      this.comments = postResposnse.data;
    } catch (e) {
      console.error(e);
    }
  }
}
</script>