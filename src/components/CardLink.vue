<script setup>
import { RouterLink, RouterView } from "vue-router";
import Card from "@/components/Card.vue";
</script>

<template>
  <RouterLink class="card-container" to="/post/1">
    <Card />
  </RouterLink>
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

.card-container .card {
  height: 400px;
  cursor: pointer;
}

.card-container .card:hover {
  transform: scale(1.05);
}

</style>