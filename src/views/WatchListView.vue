<script setup lang="ts">
import WatchCard from '@/components/WatchCard.vue'
import { ref, onMounted, type Ref } from 'vue'
import WatchService from '@/services/WatchService'
import type { Movie } from '@/models/Movie';

const movies: Ref<Movie[]> = ref([])

onMounted(() => {
  WatchService.getWatchList()
  .then((response) => {
    movies.value = response.data
  })
  .catch((error) => {
    console.log(error)
  })
})
</script>

<template>
  <h1>Movies To Watch</h1>
  <div class="movies">
    <WatchCard v-for="movie in movies" :key="movie.id" :movie="movie"/>
  </div>
</template>

<style scoped>
.movies {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>