<template>
  <div class="main">
    <div class="create-form-container" :class="{'open': formIsOpen}" @click="$emit('close-form')">
      <div class="overlay" >

      </div>
      <div class="create-form" @click.stop="openSuggestionForm">
        <div class="left-block">
          <p class="meow">мяу</p>
          <p class="question">?</p>
        </div>
        <div class="right-block">
          <div class="forms">
            <h3 id="choose-movie">ВЫБЕРИТЕ ФИЛЬМ</h3>
            <form action="" @submit.prevent="handleCreateCard">
              <input
                class="input_name"
                type="text"
                placeholder="enter title of the movie"
                v-model.trim="query"
                @keydown.escape="$emit('close-form')"
                @click="openSuggestionForm"
                @focus="openSuggestionForm"
                @input="fetchSuggestions"
              />
              <ul
                v-if="suggestions.length && suggestionsIsOpen === true"
                class="suggestions-list"
              >
                <li
                  v-for="suggestion in suggestions"
                  :key="suggestion.imdbID"
                  @click="selectSuggestion(suggestion)"
                >
                  {{ suggestion.Title }}
                </li>
              </ul>
            </form>
            <div class="forms">
              <div class="genre-form">
                <label for="genre" class="label-title">Жанр</label>
                <select id="genre" class="input-field">
                  <option value="" disabled selected>Выберите жанр</option>
                  <option value="Action">Экшн</option>
                  <option value="Drama">Драма</option>
                  <option value="Comedy">Комедия</option>
                  <option value="Horror">Ужасы</option>
                </select>
              </div>
            </div>
            <div class="forms">
              <div class="type-form">
                <label id="type-movie">Тип фильма</label>
                <div class="radio-group">
                  <label>
                    <input type="radio" name="film-type" value="Standard" checked />
                    Обычный
                  </label>
                  <label>
                    <input type="radio" name="film-type" value="3D" />
                    3D
                  </label>
                  <label>
                    <input type="radio" name="film-type" value="IMAX" />
                    IMAX
                  </label>
                </div>
              </div>
            </div>
            <div class="forms">
              <div class="ratings-form">
                <label for="rating">Рейтинг (1-10)</label>
                <input
                id="rating"
                class="input-field"
                type="range"
                min="1"
                max="10"
                step="0.1"
                v-model="rating"
                />
                <span id="rating-value">{{rating}}</span>
              </div>
            </div>
            <div class="forms">
              <div class="date-form">
                <label for="release-year">Год выпуска</label>
                <input
                id="release-year"
                class="input-field"
                type="number"
                placeholder="Введите год фильма"
                min="1900"
                max="2024"
                />
              </div>
            </div>
            <div class="forms">
              <div class="checkbox-with-rules">
                <label style="font-size: 15px;">
                <input type="checkbox" >
                нажимая сюда вы принимаете все условия
              </label>
              </div>
            </div>
          </div>
          <button class="close-btn" @click="$emit('close-form')">close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, watch, defineProps } from "vue";
import { getMovie, searchMovies } from "@/assets/api/movie";


const emits = defineEmits(["close-form", "create-card"]);

const props = defineProps({
  formIsOpen:{
    type: Boolean,
    required: true,
  }
})

const newCard = ref({
  id: null,
  name: null,
  description: null,
  image: null,
  genres: [],
});

const query = ref("");
const suggestions = ref([]);

const suggestionsIsOpen = ref(false);

const rating = ref(5) // обновление рейтинга при прокрутке ползунка

const handleCreateCard = async () => {
  if (newCard.value.name) {
    try {
      const response = await getMovie(newCard.value.name);
      if (response.Response === "True") {
        newCard.value.name = response.Title;
        newCard.value.genres = response.Genre.split(", ");
        newCard.value.description = response.Plot;
        newCard.value.image = response.Poster;

        emits("create-card", newCard.value);
        clearNewCard();
      }
    } catch (error) {
      throw new Error(`error message: ${error.message}`);
    }
  }
};

const clearNewCard = () => {
  newCard.value = {
    id: null,
    name: null,
    description: null,
    image: null,
    genres: [],
  };
  query.value = "";
  suggestionsIsOpen.value = false;
};

const fetchSuggestions = async () => {
  if (query.value.length >= 3) {
    try {
      const response = await searchMovies(query.value);
      if (response.length > 5){
        suggestions.value = response.slice(0, 5);
        console.log(response.slice(0, 5));
        
      } else {
        suggestions.value = response
      }
    } catch (error) {
      throw new Error(`error: ${error.message}`);
    }
  } else {
    suggestions.value = [];
  }
};



const selectSuggestion = async (suggestion) => {
  const response = await getMovie(suggestion.Title);
  try {
    if (response.Response === "True") {
      query.value = suggestion.Title;
      newCard.value.name = response.Title;
      newCard.value.genres = response.Genre.split(", ");
      newCard.value.description = response.Plot;
      newCard.value.image = response.Poster;

      emits("create-card", newCard.value);
      suggestions.value = [];
      clearNewCard();
    }
  } catch (error) {
    throw new Error(`Error message: ${error.message}`);
  }
};

const closeSuggestionForm = () => {
  suggestionsIsOpen.value = false;
};

const openSuggestionForm = () => {
  suggestionsIsOpen.value = true;
};

const handleClickOutside = (event) => {
  if (!event.target.closest(".create-form")) {
    closeSuggestionForm();
  }
};
watch(
  () => newCard.value.name,
  (newVal, oldVal) => {
    console.log(newVal);
    console.log(oldVal);
  }
);

watch(
  () => query.value,
  (newVal) => {
    if (newVal.length > 2) {
      suggestionsIsOpen.value = true;
    }
    if (newVal.length < 2) {
      suggestions.value = [];
    }
  }
);

watch(
  () => suggestionsIsOpen.value,
  (newVal) => {
    console.log(`watch suggestionsIsOpen : ${newVal}`);
  }
);

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>


<style
  scoped
  src="C:\Users\artur\Desktop\Артур\js\free-weekend\free-week-proj\movies\src\assets\styles\movie-form.css"
></style>

