<template>
  <div>
    <CardForm v-if="!isLoading" @open-form='openForm' :movies="movies" />
    <h1 class="loading-text" v-else>Loading...</h1>
    <MovieForm v-if="formIsOpen" @create-card="createCard" @close-form="closeForm" />
  </div>
</template>

<script setup>
import CardForm from '@/components/CardForm.vue'
import MovieForm from '@/components/MovieForm.vue'
import {ref} from 'vue'

const isLoading = ref(false)

const formIsOpen = ref(false)

const openForm = () => {
  console.log('openForm');
  formIsOpen.value = true 
}

const createCard = (item) => {
  console.log(item)
  item.id = movies.value.length + 1
  movies.value.push(item)
  console.log(item.id)
  closeForm()
  isLoading.value = true
  setTimeout(() => {isLoading.value = false}, 1500)
}

const closeForm = () => {
  console.log('closeForm')
  formIsOpen.value = false
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

<style scoped>

.loading-text{
  position: absolute;
  transform: translate(700px, 150px);
  color: #fff;
}

</style>