<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <p class="margin-top-sm">{{ body }}</p>
    <div class="user-info">
      <div><text class="bold">Name: </text><text>{{ name }}</text></div>
      <div><text class="bold">Username: </text><text>{{ username }}</text></div>
      <div><text class="bold">E-mail: </text><text>{{ email }}</text></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'body', 'name', 'username', 'email']
}
</script>