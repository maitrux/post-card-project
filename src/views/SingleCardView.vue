<script setup>
import Card from "@/components/Card.vue";
import AllComments from "@/components/AllComments.vue";
import { RouterLink, RouterView } from "vue-router";
</script>


<template>
  <div class="narrow-page-container">
    <div class="container">
      <div class="row">
        <div class="col-xs">
          <Card 
          :id="postData.id"
  	      :title="postData.title"
          :body="postData.body"
          :name="postData.name"
          :username="postData.username"
          :email="postData.email" 
          />
        </div>
      </div>

      <AllComments :id="postData.id" />
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-sm">
        <RouterLink to="/">
          <div class="return-button button button-fixed">All posts</div>
        </RouterLink>
      </div>
    </div>
  </div>

</template>

<script>
import axios from "axios";

export default {
  components: {
    Card
  },
  data() {
    return {
      postData: []
    };
  },
  async created() {
    try {
      const id = this.$route.params.id;

      // Get the post data by its id.
      const postResposnse = await axios.get("https://jsonplaceholder.typicode.com/posts/" + id);
      const userResponse = await axios.get("https://jsonplaceholder.typicode.com/users");

      const post = postResposnse.data;
      const userId = post.userId;
      
      // Match the user data to the post by using the userId.
      for(const user of userResponse.data) {
        if(userId === user.id) {
          const data = { id: post.id, title: post.title, body: post.body, name: user.name, username: user.username, email: user.email };
          this.postData = data;
          
          break;
        }
      }
    } catch (e) {
      // Redirect to the error page if the post is not found.
      return this.$router.push('/404');
    }
  }
}
</script>