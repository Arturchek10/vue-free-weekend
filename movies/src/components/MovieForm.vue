<template>
  <div class="main">
      <div class="create-form">
        <div class="forms">
          <div class="name-form">
            <form action="">
              <p class="form-text">Name</p>
              <input type="text" placeholder="enter name" v-model="newCard.name">
            </form>
          </div>
          <div class="description-form">
            <form action="">
              <p class="form-text">Description</p>
              <textarea style="height: 50px; width: 80%; border-radius: 10px; padding-left:10px;" maxlength="220"  placeholder="enter text" v-model="newCard.description"></textarea>
            </form>
          </div>
          <div class="image-form">
            <form action="">
              <p class="form-text">Image</p>
              <input type="text" placeholder="enter path" v-model="newCard.image">
            </form>
          </div>
          <div class="genres-form">
            <form action="">
              <p class="form-text">Genres</p>
              <select class="select-dropdown"  placeholder="enter name" multiple v-model="newCard.genres" >
                <option v-for="(genre) in genres" :key="genre.value" >{{ genre.text }}</option>
              </select>
            </form>
          </div>
          <div class="in-theaters">
            <input class='checkbox-in-theaters' type="checkbox" v-model="newCard.inTheaters">
            <p>in theaters</p>
          </div>
          <div class="create-cansel-buttons">
            <button id="cansel-btn" @click="$emit('close-form')" >close</button>
            <button id="create-btn" type="submit" @click="$emit('create-card', newCard)" >create</button>
          </div>
        </div>
      </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'

const props = defineProps({
  newCard: {
    type: Object
  }
})

const genres = ref([  
  { text: "Drama", value: "Drama" },
  { text: "Crime", value: "Crime" },
  { text: "Action", value: "Action" },
  { text: "Comedy", value: "Comedy" },])

const newCard = ref({
  id: null,
  name: null,
  description: null,
  image: null,
  genres: [],
  inTheaters: false
})


</script>

<style>

.create-form{
  position: absolute;
  background: gray;
  width: 500px;
  height: 440px;
  text-align: center;
  transform: translate(500px, -1400px);
}

.forms{
  width: 100%;
  text-align: left;
  margin: 10px 15px;
}
input{
  width: 80%;
  border-radius: 5px;
  height: 25px;
  border: none;
  padding-left: 5px;
}

form{
  margin-bottom: 20px;
}

.in-theaters{
  display: flex;
  margin-left: 5px ;
}
.in-theaters p {
  transform: translate(15px, 3px)
}
.checkbox-in-theaters{
  width: 16px;
}

.select-dropdown{
  width: 80%;
  height: 60px;
}

.create-cansel-buttons{
  display: flex;
  justify-content: space-between;
  padding-right: 50px;
  margin-top: 30px;
}
#cansel-btn{
  border-radius: 5px;
  background: red;
  border:0cap

}
#create-btn{
  border-radius: 5px;
  background:#0B9CE0;
  height: 30px;
  border:0cap
}
</style>