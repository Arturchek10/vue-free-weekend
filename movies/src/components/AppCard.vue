<template>  
      <div class="card">
        <div class="img-card">
          <div class="close-icon-div">
            <img id='close-icon' src="@/assets/icons/close-gray.png" alt="" @click="$emit('removeCard', card.index)">
          </div>
          <div class="rating-star" v-if="card.rating > 0">
            <img class="big-star-icon" src="@/assets/icons/big-star.png">
            <p class="rating-inside-star" >{{card.rating}}</p>
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
            <p>Rating</p>
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
  };


  </script>

<style scoped>
.card {
  width: 300px;
  margin: 20px 40px;
}

.card-img {
  width: 300px;
  height: 400px;
}

.text-block {
  background: #ffffff;
  flex: 1; /* Занимаем всё доступное пространство внутри .card */
  padding: 20px;
  height: 250px;
}

.genre {
  padding-bottom: 20px;
}
.description {
  padding-bottom: 20px;
  height: 130px;
}
.rating {
  display: flex;
}
.star-icons {
  transform: translate(20px, -2px);
}

.btn-genre {
  border-radius: 20px;
  border: none;
  background: #6466f1;
  margin-right: 5px;
}

.big-star-icon{
  width: 36px;
  position: absolute;
  transform: translate(250px, 15px);
}
.rating-inside-star{
  font-size: 21px;
  position: absolute;
  transform: translate(262px, 22px);
}
.none-rating-inside-star{
  font-size: 25px;
  position: absolute;
  transform: translate(263px, 18px);
}

#close-icon{
  position: absolute;
  transform: translate(15px, 20px);
  cursor: pointer;
  opacity: 0.6;
}
#close-icon:hover{
  opacity: 1;
}


</style>