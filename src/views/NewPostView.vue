<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="narrow-page-container">
    <div class="container">
      <div class="row">
        <div class="col-xs">
          <div class="card">
            <h2 class="text-align-center">Add a new post</h2>

            <form id="create-new-post" class="margin-top-xl">
              <div class="form-group">
                <label for="title">Title</label>
                <input id="title" class="form-control" placeholder="Enter a title">
              </div>
              <div class="form-group margin-top-sm">
                <label for="body">Content</label>
                <textarea id="body" class="form-control" rows="3"></textarea>
              </div>
              <button id="create-new-post-button" type="submit" class="btn">Submit</button>
            </form>

          </div>
        </div>
      </div>
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


// <script>
// import axios from 'axios';

// export default {
//     name: 'NewPost',
//     data() {
//       return {
//         form: {
//           title: '',
//           body: '',
//           userId: '1',
//         }
//       }
//     },
//     methods: {
//       submitForm(){
//         axios.post('https://jsonplaceholder.typicode.com/posts', this.form)
//           .then((res) => {
//               console.log(this.form)
//           })
//           .catch((error) => {
//               // error.response.status Check status code
//           }).finally(() => {
//               //Perform action in always
//           });
//       },
//     }
// }
// </script>