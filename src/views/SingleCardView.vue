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
          <Card />
          <p>{{this.$route.params.id}}</p>
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