<template>
  <div>
    <CardList v-if="!isLoading && movies.length >= 1" @open-form='openForm' :movies="movies" @removeCard="removeCard"/>
    <h1 class="loading-text" v-else-if="isLoading">Loading...</h1>
    <div class="none-cards" v-else-if="movies.length < 1">
      <h1 class="none-cards-text">нет фильмов для просмотра</h1>
      <button class="add-new-movie-btn" @click='openForm'>add new movie</button>
    </div>
    <MovieForm v-if="formIsOpen" @create-card="createCard" @close-form="closeForm" />
  </div>
</template>

<script setup>
import CardList from '@/components/CardList.vue'
import MovieForm from '@/components/MovieForm.vue'
import {ref} from 'vue'

const isLoading = ref(false)
const formIsOpen = ref(false)

const openForm = () => {
  console.log('openForm');
  formIsOpen.value = true 
  document.body.classList.add('block-screen-scroll')
  console.log(document.body.classList);
  console.log('formIsOpen' + formIsOpen.value);
  console.log('isLoading' + isLoading.value);
}

const createCard = (item) => {
  // console.log(item)
  if(item.image && item.name && item.description){
    item.id = movies.value.length + 1
    movies.value.push(item)
    // console.log(item.id)
    closeForm()
    isLoading.value = true
    setTimeout(() => {isLoading.value = false}, 1500)
  } else {
    alert('заполните поля name, description, image')
  }
}

const closeForm = () => {
  console.log('closeForm')
  formIsOpen.value = false
  document.body.classList.remove('block-screen-scroll')
}

const removeCard = (id) => {
  console.log(id);
  console.log(movies.value);
  movies.value.splice(id,1)
}

const movies = ref([
  {
    id: 1,
    name: "The Godfather",
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    image:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UY1982_.jpg",
    rating: 0,
    genres: ["Crime", "Drama"],
    inTheaters: false,
    isClick: false,
  },
  {
    id: 2,
    name: "The Shawshank Redemption",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1200_.jpg",
    rating: 0,
    genres: ["Drama"],
    inTheaters: false,
    isClick: false,
  },
  {
    id: 3,
    name: "The Dark Knight",
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UY2048_.jpg",
    rating: 0,
    genres: ["Action", "Crime", "Drama"],
    inTheaters: false,
    isClick: false,
  },
  {
    id: 4,
    name: "Forrest Gump",
    description:
      "The history of the United States from the 1950s to the '70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart.",
    image: "https://m.media-amazon.com/images/I/91++WV6FP4L._SL1500_.jpg",
    rating: 0,
    genres: ["Drama", "Romance"],
    inTheaters: false,
    isClick: false,
  },

]);


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

 /* .none-cards-text{
  position: absolute;
  transform: translate(550px, 200px);
  color: #fff;
} */

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
  margin-top: 15%;
  font-size: 24px;
}
</style>