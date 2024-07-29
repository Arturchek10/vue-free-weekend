<template>
  <div>
    <CardList v-if="!isLoading && movies.length >= 1" @open-form='openForm' :movies="movies" @removeCard="removeCard"/>
    <h1 class="loading-text" v-else-if="isLoading">Loading...</h1>
    <div class="none-cards" v-else-if="movies.length < 1">
      <img class="sad-smile-icon" src="./assets/icons/sad-face.svg" alt="">
      <h1 class="none-cards-text">нет фильмов для просмотра</h1>
      <button class="add-new-movie-btn" @click='openForm'>add new movie</button>
    </div>
    <MovieForm v-if="formIsOpen" @create-card="createCard" @close-form="closeForm" />
  </div>
</template>

<script setup>
import CardList from '@/components/CardList.vue'
import MovieForm from '@/components/MovieForm.vue'
import {computed, onMounted, ref} from 'vue'
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
  document.body.classList.remove('block-screen-scroll')
}

const removeCard = (id) => {
  movieStore.removeMovie(id)
}

</script>

<style >

.block-screen-scroll{
  overflow: hidden;
}

.loading-text{
  font-size: 40px;
  margin-left: 45%;
  margin-top: 15%;
  color: #fff;
}

.add-new-movie-btn{
  font-size: 20px;
  font-weight: 600;
  width: 250px;
  height: 50px;
  border-radius: 10px;
  background-color: #0B9CE0;
  cursor: pointer;
  margin-top: 2em;
}

.none-cards{
  color: #fff;
  text-align: center;
  margin-top: 10%;
  font-size: 24px;
}

.sad-smile-icon{
  width: 90px;

}

</style>