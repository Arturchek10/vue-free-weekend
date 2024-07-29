<template>
  <div class="main">
    <div class="button-div">
      <button class="add-movie-btn" @click="$emit('open-form')">add movie</button>
    </div>
    <div class="div-cards-list">
      <AppCard v-for="(item, index) in movies "
      :key="item.id"
      :index="index"
      :card="item" 
      @removeCard="$emit('removeCard', index)"
      />
    </div>
</div>
</template>

<script setup>
import { ref } from "vue";
import AppCard from "@/components/AppCard.vue"
import { getMovie } from "@/assets/api/movie";
import { onMounted } from "vue";


const props = defineProps({
  movies: {
    type: Array
  },
})

// const loadMovie = async (title) => {
//   try{
//     const response = await getMovie(title)
//     console.log(response);
//   } catch(error) {
//     throw new Error (`error is: ${error.message}`)
//   }
// }
// onMounted(() => {
//   loadMovie('The Godfather')
// })

</script>

<style scoped>

.div-cards-list{
  width: 80%;
  margin: 40px 150px 0px auto;
  display: flex;
  flex-wrap: wrap;
}

.add-movie-btn{
  position: fixed;
  width: 120px;
  height: 40px;
  border-radius: 10px;
  background-color: #0B9CE0;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transform: translate(-130px, 0px);
}
.button-div{
  text-align: end;
  padding-top: 20px;
  margin-right: 30px;
}
</style>
