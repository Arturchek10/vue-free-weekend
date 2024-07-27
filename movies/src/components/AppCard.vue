<template>
  <div class="card">
    <div class="img-card">
      <div class="close-icon-div">
        <img id='close-icon' src="@/assets/icons/close-gray.png" alt="" @click="$emit('removeCard', card.index)">
      </div>
      <div class="rating-star" v-if="card.rating > 0">
        <img class="big-star-icon" src="@/assets/icons/big-star.png">
        <p class="rating-inside-star">{{card.rating}}</p>
      </div>
      <div v-else-if="card.rating === 0">
        <img class="big-star-icon" src="@/assets/icons/red-star.png">
        <p class="none-rating-inside-star">-</p>
      </div>
      <img class="card-img" :src="card.image" alt="" />
    </div>
    <div class="text-block">
      <div class="title">
        <h3>{{ card.name }}</h3>
      </div>
      <div class="genre" v-if="card.genres.length >= 1">
        <button class="btn-genre">{{ card.genres[0] }}</button>
        <button class="btn-genre" v-if="card.genres[1]" id="btn-genre">{{ card.genres[1] }}</button>
        <button class="btn-genre" v-if="card.genres[2]" id="btn-genre">{{ card.genres[2] }}</button>
        <button class="btn-genre" v-if="card.genres[3]" id="btn-genre">{{ card.genres[3] }}</button>
        <button class="btn-genre" v-if="card.genres[4]" id="btn-genre">{{ card.genres[4] }}</button>
      </div>
      <div class="description">
        <p>{{ card.description }}</p>
      </div>
      <div class="rating">
        <p id="rating-text">Rating</p>
        <StarIcon
          class="star-icons"
          v-for="(star, index) in 5"
          :key="star"
          :index="index"
          :isClick="card.isClick && index < card.rating"
          @changeStarToggle="toggleStar(card, index)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import StarIcon from "@/components/StarIcon.vue";
import { useMoviesStore } from "@/assets/stores/movies";

const moviesStore = useMoviesStore()

const props = defineProps({
  index: {
    type: Number
  },
  card: {
    type: Object
  }
})

const toggleStar = (item, index) => {
  item.rating = index + 1
  for(let i = 0; i < item.rating; i++){
    item.isClick = true
  }
  moviesStore.updateMovie(props.index, item)
};



</script>

<style scoped>
.card {
  width: 300px;
  margin: 20px 40px;
  position: relative; /* Добавлено для относительного позиционирования */
}

.card-img {
  width: 300px;
  height: 400px;
  border-radius: 10px;
}

.text-block {
  background: #ffffff;
  padding: 20px;
  height: 250px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
}

.title {
  margin-bottom: 10px;
}

.genre {
  padding-bottom: 20px;
}

.description {
  padding-bottom: 20px;
  flex-grow: 1;
  overflow: hidden;
}

.rating {
  display: flex;
  align-items: center;
}

.star-icons {
  margin-left: 0px;
}

.btn-genre {
  border-radius: 20px;
  border: none;
  background: #6466f1;
  margin-right: 5px;
}

.big-star-icon {
  width: 36px;
  position: absolute;
  right: 10px;
  top: 10px;
}

.rating-inside-star {
    font-size: 18px;
    position: absolute;
    right: 23px;
    top: 19px;
}

.none-rating-inside-star {
  font-size: 25px;
  position: absolute;
  right: 14px;
  top: 10px;
}

#close-icon {
  position: absolute;
  right: 260px;
  top: 15px;
  cursor: pointer;
  opacity: 0.4;
}

#close-icon:hover {
  opacity: 1;
}

#rating-text{
  margin-right: 10px;
}
</style>
