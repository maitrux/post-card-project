<script setup>
import { RouterLink, RouterView } from "vue-router";
import Card from "@/components/Card.vue";
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
                <label for="exampleInputEmail1">Title</label>
                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter a title">
              </div>
              <div class="form-group margin-top-sm">
                <label for="exampleFormControlTextarea1">Content</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
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
          <div class="return-button button">All posts</div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style>
  .textarea {
    width: 100%;
  }

  #create-new-post-button {
    background-color: #1d455d;
    text-align: center;
    padding: 10px;
    border-radius: 4px;
    color: #ffffff;
    cursor: pointer;
    width: 250px;
    outline: none;
    border: none;
    margin-top: 20px;
    float: right;
  }
</style>