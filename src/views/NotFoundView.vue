<script setup>
  import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="narrow-page-container not-found-page">
    <div class="container">
      <div class="row">
        <div class="col-xs">
          <div class="card">
            <h2 class="text-align-center">Page not found</h2>

            <RouterLink to="/">
              <button class="button">See all posts</button>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>