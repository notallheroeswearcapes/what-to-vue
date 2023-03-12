<script setup lang="ts">
defineProps({
  movie: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="watch-card">
    <h2>{{ movie.title }}</h2>
    <p>{{ movie.description }}</p>
    <p>Rank {{ movie.rank }} with Rating {{ movie.rating }}</p>
  </div>
</template>

<style scoped>
.watch-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.watch-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
