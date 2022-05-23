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

      const postResposnse = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
      const userReponse = await axios.get(`https://jsonplaceholder.typicode.com/users`);

      const postArray = [];
      for(const post of postResposnse.data) {
        for(const user of userReponse.data) {
          if(post.userId === user.id) {
            const postData = { id: post.id, title: post.title, body: post.body, name: user.name, username: user.username, email: user.email };
            postArray.push(postData)
          }
        }
      }

      this.posts = postArray;
      console.log(postArray)
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
          :name="post.name"
          :username="post.username"
          :email="post.email" 
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