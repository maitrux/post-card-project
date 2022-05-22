<script setup>
import Card from "@/components/Card.vue";
import Comment from "@/components/Comment.vue";
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="single-card-view-container">
    <div class="container">
      <div class="row">
        <div class="col-xs">
          <Card />
        </div>
      </div>

      <div class="row">
        <div class="col-xs">
          <Comment />
        </div>
      </div>

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
          <div class="return-button button">Return</div>
        </RouterLink>
      </div>
    </div>
  </div>

</template>

<style>
  .single-card-view-container {
    padding: 0px 20%;
    animation: fadeInAnimation ease-in 0.5s;
  }

  @keyframes fadeInAnimation {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
     }
  }

  .return-button {
  bottom: 5%;
  left: 1%;
  }
</style>
