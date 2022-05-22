<script setup>
import { RouterLink, RouterView } from "vue-router";
import Card from "@/components/Card.vue";
import AllCardsView from "@/views/AllCardsView.vue";
</script>

<template>
  <AllCardsView />

    <!-- <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> 
      <RouterView />
    </div> -->
  
</template>

<style>
@import "@/assets/base.css";

#app {
  min-height: 100vh;
  background-color: #9cc5dc;
}

@media (min-width: 1024px) {
}
</style>
