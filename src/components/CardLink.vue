<script setup>
import { RouterLink, RouterView } from "vue-router";
import Card from "@/components/Card.vue";
</script>

<template>
  <RouterLink class="card-container" :to="{ path: '/post/'+ id }">
    <Card 
      :id="id"
      :body="body" 
      :title="title"
      :name="name"
      :username="username"
      :email="email"
    />
  </RouterLink>
</template>

<script>
export default {
  props: ['id', 'title', 'body', 'name', 'username', 'email'],
}
</script>