<template>
<div class="container">

  <div class="card" v-for="(item) in movies" :key="item.id">
    <div class="img-card">
      <img class="card-img" :src='item.image' alt="">
    </div>
    <div class="text-block">
      <div class="title">
        <h3>{{ item.name }}</h3>
      </div>
      <div class="genre">
        <button id="btn-genre">{{ item.genres[0] }}</button>
      </div>
      <div class="description">
        <p>{{ item.description }}</p>
      </div>
      <div class="rating">
        <p>Rating ({{ item.rating }}/5)</p>
        <div class="stars">
          <p v-if="item.rating === 5">⭐⭐⭐⭐⭐</p>
          <p v-else-if="item.rating === 4">⭐⭐⭐⭐</p>
          <p v-else-if="item.rating === 3">⭐⭐⭐</p>
          <p v-else-if="item.rating === 2">⭐⭐</p>
          <p v-else-if="item.rating === 1">⭐</p>
        </div>
      </div>
    </div>
  </div>
  
</div>
</template>

<script setup>
import {ref} from 'vue'

const movies = ref([
		{
			"id": 1,
			"name": "The Godfather",
			"description": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
			"image": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UY1982_.jpg",
			"rating": 4,
			"genres": [
				"Crime",
				"Drama"
			],
			"inTheaters": false
		},
		{
			"id": 2,
			"name": "The Shawshank Redemption",
			"description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
			"image": "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1200_.jpg",
			"rating": 4,
			"genres": [
				"Drama"
			],
			"inTheaters": false
		},
		{
			"id": 3,
			"name": "The Dark Knight",
			"description": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
			"image": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UY2048_.jpg",
			"rating": 3,
			"genres": [
				"Action",
				"Crime",
				"Drama"
			],
			"inTheaters": false
		},
		{
			"id": 4,
			"name": "Forrest Gump",
			"description": "The history of the United States from the 1950s to the '70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart.",
			"image": "https://m.media-amazon.com/images/I/91++WV6FP4L._SL1500_.jpg",
			"rating": 5,
			"genres": [
				"Drama",
				"Romance"
			],
			"inTheaters": false
		},
		{
			"id": 5,
			"name": "Forrest Gump",
			"description": "The history of the United States from the 1950s to the '70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart.",
			"image": "https://m.media-amazon.com/images/I/91++WV6FP4L._SL1500_.jpg",
			"rating": 5,
			"genres": [
				"Drama",
				"Romance"
			],
			"inTheaters": false
		},
		{
			"id": 6,
			"name": "The Shawshank Redemption",
			"description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
			"image": "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1200_.jpg",
			"rating": 4,
			"genres": [
				"Drama"
			],
			"inTheaters": false
		},
])

</script>

<style scoped>
.container {
  width: 80%;
  margin: 40px auto;
  display: flex;  
  box-sizing: border-box;
  flex-wrap: wrap;
}

.card {
  width: 300px;
  display: flex;
  flex-direction: column; /*Располагаем элементы вертикально*/
  margin: 20px 40px;
}

.card-img {
  width: 300px;
  height: 400px;
}

.text-block {
  background: #ffffff;
  /* padding-left: 20px; */
  flex: 1; /* Занимаем всё доступное пространство внутри .card */
  display: flex;
  flex-direction: column; /*Внутренние элементы располагаем вертикально*/
  padding: 20px;
}



.genre{
  padding-bottom: 20px;
}
.description{
  padding-bottom: 20px
}
.rating {
  display: flex;
  margin-top: auto;
  padding-bottom: 20px;
}
.stars{
  margin-left: 10px;
  transform: translateY(-3px);
}

#btn-genre{
  border-radius: 20px;
  border: none;
  background: #6466F1;
}
</style>