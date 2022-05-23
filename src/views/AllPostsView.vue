<script setup>
import CardLink from "@/components/CardLink.vue";
</script>

<script>
  import axios from "axios";

export default {
  components: {
    CardLink
  },
  data() {
    return {
      posts: []
    };
  },
  async created() {
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
      this.posts = res.data;
    } catch (e) {
      console.error(e);
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-4" v-for="post in posts" :key="post.id">
        <CardLink
  	      :title="post.title"
          :body="post.body" 
        />
      </div>
    </div>

    <div class="row">
      <div class="col-sm">
      <RouterLink to="/new-post">
        <div class="add-post-button button">Add a new post</div>
      </RouterLink> 
      </div>
    </div>

  </div>
</template>

<style>
@import "@/assets/base.css";

.add-post-button {
  bottom: 5%;
  right: 1%;
}
</style>

