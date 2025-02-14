<template>
  <div @keyup.escape="close-form" >
    <div v-if="!isLoading && movieStore.movies.length" class="button-div">
      <button class="add-movie-btn" @click="openForm">add movie</button>
    </div>
    <CardList class="card-list-component" v-if="!isLoading && movies.length >= 1" @open-form='openForm' :movies="movies" @removeCard="removeCard"/>
    <h1 class="loading-text" v-else-if="isLoading">Loading...</h1>
    <div class="none-cards" v-else-if="movies.length < 1">
      <img class="sad-smile-icon" src="./assets/icons/sad-face.svg" alt="">
      <h1 class="none-cards-text">нет фильмов для просмотра</h1>
      <button class="add-new-movie-btn" @click='openForm'>add new movie</button>
    </div>
    <MovieForm :formIsOpen="formIsOpen" @create-card="createCard" @closeForm="closeForm" />
  </div>
</template>

<script setup>
import CardList from '@/components/CardList.vue'
import MovieForm from '@/components/MovieForm.vue'
import {computed, onMounted, ref, watch} from 'vue'
import {useMoviesStore} from '@/assets/stores/movies'
const movieStore = useMoviesStore()

const isLoading = ref(false)
const formIsOpen = ref(false)

const movies = computed(() => movieStore.movies)


onMounted(() => {
  movieStore.loadFromLocalStorage()
})

const openForm = () => {
  formIsOpen.value = true
  console.log('formIsOpen ', formIsOpen.value)
  document.body.classList.add('block-screen-scroll')
}

const createCard = (item) => {
    item.id = movies.value.length + 1
    movieStore.addMovie(item)
    closeForm()
    isLoading.value = true
    setTimeout(() => {isLoading.value = false}, 1500)
}

const closeForm = () => {
  console.log('closeForm')
  formIsOpen.value = false
  console.log('formIsOpen ', formIsOpen.value);
  
  document.body.classList.remove('block-screen-scroll')
}

const removeCard = (id) => {
  movieStore.removeMovie(id)
}


</script>

<style src="C:\Users\artur\Desktop\Артур\js\free-weekend\free-week-proj\movies\src\assets\styles\big-screen.css">

</style>