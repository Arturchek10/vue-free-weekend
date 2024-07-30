<template>
  <div class="main">
    <div class="create-form-container">
      <!-- click.stop ? -->
      <div class="create-form" @click.stop="openSuggestionForm">
        <div class="forms">
          <h3 style="text-align: center; margin: 20px;">input the name of movie</h3>
          <div class="name-form">
            <form action="" @submit.prevent="handleCreateCard">
              <!-- @focus ? -->
              <input
                type="text"
                placeholder="enter name"
                v-model.trim="query"
                @click="openSuggestionForm"
                @focus="openSuggestionForm" 
                @input="fetchSuggestions"
              />
              <ul v-if="suggestions.length && suggestionsIsOpen === true" class="suggestions-list">
                <li
                  v-for="suggestion in suggestions" 
                  :key="suggestion.imdbID"
                  @click="selectSuggestion(suggestion)"
                >{{ suggestion.Title }} 
              </li>
              </ul>
            </form>
          </div>
          <div class="create-cansel-buttons">
            <button id="cansel-btn" @click="$emit('close-form')">close</button>
            <!-- <button id="create-btn" type="submit" @click="handleCreateCard">create</button> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, watch } from "vue";
import {getMovie, searchMovies} from "@/assets/api/movie"

const emits = defineEmits(['close-form', 'create-card'])

const newCard = ref({
  id: null,
  name: null,
  description: null,
  image: null,
  genres: [],
});

const query = ref('')
const suggestions = ref([])

const suggestionsIsOpen = ref(false)

// проблема не передается навание фильма
const handleCreateCard = async () => {
  // console.log('handleCreateCard');
  // console.log(newCard.value.name);
  if(newCard.value.name ){
    try{
      const response = await getMovie(newCard.value.name)
      if(response.Response === 'True'){
        newCard.value.name = response.Title
        newCard.value.genres = response.Genre.split(', ')
        newCard.value.description = response.Plot
        newCard.value.image = response.Poster
        emits('create-card', newCard.value )
        clearNewCard()
      }
    } catch(error) {
      throw new Error (`error message: ${error.message}`)
    }
  }
}

const clearNewCard = () => {
  newCard.value = {
  id: null,
  name: null,
  description: null,
  image: null,
  genres: [],
  }
  query.value = ''
  suggestionsIsOpen.value = false
}

const fetchSuggestions = async () => {
  // console.log('fetchSuggestions');
  if(query.value.length > 2){
    try {
      const response = await searchMovies(query.value)
      suggestions.value = response.slice(0,5)
      // console.log(suggestions);
    } catch (error){
      throw new Error (`error: ${error.message}`)
    }
  } else {
    suggestions.value = []
  }
}

const selectSuggestion = async (suggestion) => {
  // console.log('selectSuggestion'); 
  // console.log(`suggestion: ${suggestion}`);
  const response = await getMovie(suggestion.Title)
  // console.log(`response : ${response}`);
  try{
    if (response.Response === 'True'){
      query.value = suggestion.Title  
      newCard.value.name = response.Title
      newCard.value.genres = response.Genre.split(', ')
      newCard.value.description = response.Plot
      newCard.value.image = response.Poster
      
      emits("create-card", newCard.value)
      suggestions.value = []  
      clearNewCard()
    }
  } catch(error) {
    throw new Error (`Error message: ${error.message}`)
  }
}

const closeSuggestionForm = () => {
  suggestionsIsOpen.value = false
}

const openSuggestionForm = () => {
  suggestionsIsOpen.value = true
}

const handleClickOutside = (event) => {
  // event.target.closest(.className) ?
  if(!event.target.closest('.create-form')){
    closeSuggestionForm()
  }
}

watch(
  () => newCard.value.name, 
  (newVal, oldVal) => {
    console.log(newVal)
    console.log(oldVal);
})

watch(
  () => query.value,
  (newVal) => {
    // console.log(suggestions.value)
    // console.log(newVal.length);
    // console.log(suggestionsIsOpen.value)
    if(newVal.length > 2){
      suggestionsIsOpen.value = true
      // console.log(`newVal.length > 2, so ${suggestionsIsOpen.value}`);
    }
    if(newVal.length < 2){
      suggestions.value = []
    }
  } 
)

watch(
  () => suggestionsIsOpen.value,
  (newVal) => {
    console.log(`watch suggestionsIsOpen : ${newVal}`)
  }
)

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})

</script>

<style>
.create-form {
  position: fixed; /* Чтобы форма всегда оставалась на экране */
  top: 50%; /* Расположить форму по вертикали на 50% экрана */
  left: 50%; /* Расположить форму по горизонтали на 50% экрана */
  transform: translate(-50%, -50%); /* Центрировать форму относительно её собственных размеров */
  background: #848689;
  width: 500px;
  height: 200px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 999; /* Поднимает форму над остальными элементами */
  border-radius: 10px;
}

.create-form-container {
  position: fixed; /* Фиксированное позиционирование для затемненного фона */
  top: 0;
  left: 0;
  width: 100%; /* Занимает всю ширину экрана */
  height: 100%; /* Занимает всю высоту экрана */
  background-color: rgba(0, 0, 0, 0.5); /* Затемнённый цвет фона */
  z-index: 998; /* Поднимает затемненный фон над остальными контентными элементами, но ниже формы */
}

input {
  width: 70%;
  background: #f1f1f1;
  height: 25px;
  border: none;
  padding-left: 5px;
}

form {
  margin-bottom: 20px;
}

.form-text{
  margin-bottom: 5px;
}

.in-theaters {
  display: flex;
  margin-left: 5px;
}
.in-theaters p {
  transform: translate(15px, 3px);
}
.checkbox-in-theaters {
  width: 16px;
}

.select-dropdown {
  width: 80%;
  height: 60px;
}

.create-cansel-buttons {
  /* display: flex;
  justify-content: space-between;
  padding: 0px 50px;
  margin-top: 50px; */
}
.create-cansel-buttons button{
  cursor: pointer;
}
#cansel-btn {
  border-radius: 5px;
  background: red;
  border: 0cap;
  width: 60px;
  height: 30px;
  margin-top: 30px;
  font-weight: 500;
}
#create-btn {
  border-radius: 5px;
  background: #0b9ce0;
  height: 30px;
  border: 0cap;
  width: 80px;
  font-weight: 500;
}

.suggestions-list{
  position: fixed;
  background: white;
  list-style: none;
  width: 358px;
  margin-left: 71px;
  margin-top: 2px;
  padding: 0px 0px;
}

li{
  cursor: pointer;
  padding: 3px;
  border-bottom: 1px solid #d4d4d4;
}
li:hover{
  background: #8ed0ef;
}
</style>
