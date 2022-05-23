<script setup>
import CardLink from "@/components/CardLink.vue";
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-xs">
        <div class="card">
          <h2 class="text-align-center">Add a new post</h2>

          <form id="create-new-post" class="margin-top-xl" @submit="submit">
            <div class="form-group">
              <label for="title">Title</label>
              <input id="title" class="form-control" v-model="title" name="title" placeholder="Enter a title" required>
            </div>
            <div class="form-group margin-top-sm">
              <label for="body">Body</label>
              <textarea id="body" class="form-control" rows="3" v-model="body" name="body" required></textarea>
            </div>
            <button id="create-new-post-button" type="submit" class="btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>

  <div class="container all-posts-view">
    <div class="row">
      <div class="col-4" v-for="post in posts" :key="post.id">
        <CardLink
          :id="post.id"
  	      :title="post.title"
          :body="post.body"
          :name="post.name"
          :username="post.username"
          :email="post.email" 
        />
      </div>
    </div>
  </div>
</template>

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
      const postResposnse = await axios.get("https://jsonplaceholder.typicode.com/posts");
      const userReponse = await axios.get("https://jsonplaceholder.typicode.com/users");

      const postArray = [];
      for(const post of postResposnse.data) {
        for(const user of userReponse.data) {
          if(post.userId === user.id) {
            const postData = { id: post.id, title: post.title, body: post.body, name: user.name, username: user.username, email: user.email };
            postArray.push(postData);
          }
        }
      }

      this.posts = postArray;
    } catch (e) {
      console.error(e);
    }
  },
  methods : {
    submit(e) {
      e.preventDefault();
      const newPost = {title: this.title, body: this.body, userId: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz"}

      axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
        .then(function(response) {
          console.log(response)
        }.bind(this));

         this.posts.push(newPost)

      window.scrollTo(0, document.body.scrollHeight);
    }
  },
}
</script>