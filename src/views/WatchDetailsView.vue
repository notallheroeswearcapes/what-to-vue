<script setup>
import { ref, onMounted } from 'vue'

const movie: Movie = ref(null)

onMounted(() => {
    // fetch event by id and set local data
})
</script>

<template>
    <div>
        <h1>{{ movie.title }}</h1>
        <img v-bind:src="movie.image">
        <p>{{ movie.description }}</p>
        <p>Released in {{ movie.year }}</p>
        <p>Rank {{ movie.rank }} with Rating {{ movie.rating }}</p>
        <p>Click <a>here</a> to see the trailer!</p>
    </div>
</template>