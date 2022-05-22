<script setup>
import Card from "@/components/Card.vue";
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <Card />
      </div>
      <div class="col-sm">
        <Card />
      </div>
      <div class="col-sm">
        <Card />
      </div>
    </div>

    <div class="row">
      <div class="col-sm">
        <Card />
      </div>
      <div class="col-sm">
        <Card />
      </div>
      <div class="col-sm">
        <Card />
      </div>
    </div>

     <div class="row">
       <div class="col-sm">
         <div class="add-post-button">Add a new post</div>
       </div>
     </div>
  </div>
</template>

<style>
@import "@/assets/base.css";

.add-post-button {
  background-color: #1d455d;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  color: #ffffff;
  font-size: 20px;
  position: fixed;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  bottom: 5%;
  right: 1%;
}

.add-post-button:hover {
  background-color: #112938;
}
</style>