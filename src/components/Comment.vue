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

<script>
export default {
  props: ['email', 'body']
}
</script>