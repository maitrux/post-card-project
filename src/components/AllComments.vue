<script setup>
import Comment from "@/components/Comment.vue";
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
  props: ['id'],
  async created() {
    try {
      const id = this.$route.params.id;

      // Get the comments related to the post by using the post id.
      const postResposnse = await axios.get("https://jsonplaceholder.typicode.com/posts/" + id + "/comments");
      this.comments = postResposnse.data;
    } catch (e) {
      console.error(e);
    }
  }
}
</script>