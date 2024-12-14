<template>
  <div class="card-wrapper">
    <div class="rotating-background"></div> <!-- Вращающийся фон -->
    <div class="card">
      <div class="img-card">
        <div class="close-icon-div">
          <img
            id="close-icon"
            src="@/assets/icons/close-gray.png"
            alt=""
            @click="$emit('removeCard', card.index)"
          />
        </div>
        <div class="rating-star" v-if="card.rating > 0">
          <img class="big-star-icon" src="@/assets/icons/big-star.png" />
          <p class="rating-inside-star">{{ card.rating }}</p>
        </div>
        <div v-else-if="card.rating === 0">
          <img class="big-star-icon" src="@/assets/icons/red-star.png" />
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
          <button class="btn-genre" v-if="card.genres[1]" id="btn-genre">
            {{ card.genres[1] }}
          </button>
          <button class="btn-genre" v-if="card.genres[2]" id="btn-genre">
            {{ card.genres[2] }}
          </button>
          <button class="btn-genre" v-if="card.genres[3]" id="btn-genre">
            {{ card.genres[3] }}
          </button>
          <button class="btn-genre" v-if="card.genres[4]" id="btn-genre">
            {{ card.genres[4] }}
          </button>
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
          <div class="viewed">
            <img
              class="viewed-icon"
              src="/src/assets/icons/viewed-icon.png"
              alt="просмотрено"
              @click="handleViewedCard(card)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Скриптовая часть остается такой же
import { watch } from "vue";
import StarIcon from "@/components/StarIcon.vue";
import { useMoviesStore, useViewedMoviesStore } from "@/assets/stores/movies";

// stores
const moviesStore = useMoviesStore();
const viewedMoviesStore = useViewedMoviesStore();

const props = defineProps({
  index: {
    type: Number,
  },
  card: {
    type: Object,
  },
});

const toggleStar = (item, index) => {
  item.rating = index + 1;
  for (let i = 0; i < item.rating; i++) {
    item.isClick = true;
  }
  moviesStore.updateMovie(props.index, item);
};

const handleViewedCard = (card) => {
  moviesStore.removeMovie(props.index);
  viewedMoviesStore.addMovie(card);
};

watch(
  () => viewedMoviesStore.length,
  (newVal) => {
    console.log("watch" + newVal);
  }
);
</script>

<style scoped src="C:\Users\artur\Desktop\Артур\js\free-weekend\free-week-proj\movies\src\assets\styles\app-card.css">

</style>
