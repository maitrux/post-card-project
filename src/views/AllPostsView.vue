<script setup>
import CardLink from "@/components/CardLink.vue";
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <CardLink />
      </div>
      <div class="col-sm">
        <CardLink />
      </div>
      <div class="col-sm">
        <CardLink />
      </div>
    </div>

    <div class="row">
      <div class="col-sm">
        <CardLink />
      </div>
      <div class="col-sm">
        <CardLink />
      </div>
      <div class="col-sm">
        <CardLink />
      </div>
    </div>

     <div class="row">
       <div class="col-sm">
         <div class="add-post-button button">Add a new post</div>
       </div>
     </div>
  </div>
</template>

<style>
@import "@/assets/base.css";

.add-post-button {
  bottom: 5%;
  right: 1%;
}
</style>