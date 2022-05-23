<script setup>
import Card from "@/components/Card.vue";
import Comment from "@/components/Comment.vue";
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="narrow-page-container">
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
          <div class="return-button button">All posts</div>
        </RouterLink>
      </div>
    </div>
  </div>

</template>
