<script setup>
import Card from "@/components/Card.vue";
</script>

<template>
  <div class="row">
    <div class="col-xs">
      <div class="comment">
        <p class="margin-top-sm blue-text">{{ email }}</p>
        <p>{{ body }}</p>
      </div>
    </div>
  </div>
</template>

<style>
  .single-card-view-container {
    padding: 0px 20%;
  }

  .comment {
    padding: 10px;
    background-color: #112938;
    border-radius: 4px;
    margin-top: 20px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: 0.3s;
    color: #ffffff !important;
    text-decoration: none !important;
  }

  .blue-text {
    color: #398ab9;
  }
</style>

<script>
export default {
  props: ['email', 'body']
}
</script>