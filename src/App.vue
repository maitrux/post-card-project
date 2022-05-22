<script setup>
import { RouterLink, RouterView } from "vue-router";
import AllPostsView from "@/views/AllPostsView.vue";
</script>

<template>
    <div>
      <RouterView />
    </div>
  
</template>

<style>
@import "@/assets/base.css";

#app {
  min-height: 100vh;
  background-color: #9cc5dc;
  padding-bottom: 30px;
}

@media (min-width: 1024px) {
}
</style>
