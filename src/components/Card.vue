<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <p class="margin-top-sm">{{ body }}</p>
    <div class="user-info">
      <div><text class="bold">Name: </text><text>{{ name }}</text></div>
      <div><text class="bold">Username: </text><text>{{ username }}</text></div>
      <div><text class="bold">E-mail: </text><text>{{ email }}</text></div>
    </div>
  </div>
</template>

<style>
@import "@/assets/base.css";

#app {
  min-height: 100vh;
  background-color: #9cc5dc;
}

.card-container {
  text-decoration: none !important;
}

.all-posts-view .user-info {
  position: absolute;
  bottom: 15px;
}

.card {
  padding: 10px;
  background-color: #ffffff;
  border-radius: 4px;
  margin-top: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: 0.3s;
  color: black !important;
  text-decoration: none !important;
}

</style>

<script>
export default {
  props: ['title', 'body', 'name', 'username', 'email']
}
</script>