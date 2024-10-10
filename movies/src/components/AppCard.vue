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

<style scoped>
@media (min-width: 1024px) {
  * {
    font-size: 16px;
  }

  h3 {
    font-size: 20px;
  }

  .card-wrapper {
    position: relative;
    width: 320px;
    margin: 20px 40px;
    overflow: hidden;
    padding: 10px;
    border-radius: 10px;
  }

  .rotating-background {
    position: absolute;
    top: -70px;
    left: 16%;
    width: 70%;
    height: 120%;
    background: linear-gradient(#00ccff, #d500f9);
    border-radius: 20%;
    padding: 10px;
    z-index: -1; /* фон за карточкой */
    opacity: 0;
  }

  .card-wrapper:hover .rotating-background {
    animation: rotate 6s linear infinite; /* Анимация вращения фона */
    opacity: 1;
    transition: 2s;

  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .card {
    position: relative;
    z-index: 1; /* Чтобы карточка была над фоном */
    padding: 10px;
    background: #fff;
    border-radius: 10px;
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
    margin-bottom: 10px;
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
    margin-top: 5px;
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
    right: 275px;
    top: 15px;
    cursor: pointer;
    opacity: 0.7;
  }

  #close-icon:hover {
    opacity: 1;
  }

  #rating-text {
    margin-right: 10px;
  }

  .viewed-icon {
    display: block;
    margin-left: 20px;
    cursor: pointer;
    opacity: 0.5;
    transition: 0.5s;
    margin-top: 2px;
  }

  .viewed-icon:hover {
    opacity: 1;
  }
}
</style>
