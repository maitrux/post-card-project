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

      <AllComments :id="this.$route.params.id" />

      <div class="row">
       <div class="col-sm">
          <RouterLink to="/">
            <div class="return-button button">Return</div>
          </RouterLink>
       </div>
     </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-sm">
        <RouterLink to="/">
          <div class="return-button button">All posts</div>
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
      const postResposnse = await axios.get("https://jsonplaceholder.typicode.com/posts/" + this.$route.params.id);
      const userResponse = await axios.get("https://jsonplaceholder.typicode.com/users");

      const post = postResposnse.data;
      const userId = post.userId;
      
      for(const user of userResponse.data) {
        if(userId === user.id) {
          const data = { id: post.id, title: post.title, body: post.body, name: user.name, username: user.username, email: user.email };
          this.postData = data;
          
          break;
        }
      }
    } catch (e) {
      console.error(e);
    }
  }
}
</script>