<template>
  <div>
    <div v-if="viewedMoviesStore.viewedMovies.length" class="title">
      <h3>уже посмотрели</h3> 
    </div>
    <div v-else>
      <h3 class="title">нет посмотренных фильмов</h3>
      <p style="color: white; text-align: center; font-weight: 400; margin-top: 1%; ">
        чтобы добавить фильм в "просмотренные" нажмите на его карточке иконку глаза 
        <img style="transform: translate(10px, 10px);" src="/src/assets/icons/viewed-icon.png" alt=""></p>
    </div>
    <div class="viewed-card-list">
      <AppCard v-for="item, index in viewedMovies"
      :key="item.id"
      :index="index"
      :card="item" 
      class="viewed-card-item"
      @remove-card="removeCard"
      />
    </div>    
  </div>
</template>

<script setup>
import {computed, onMounted} from 'vue'
import {useViewedMoviesStore} from '@/assets/stores/movies'
import AppCard from '@/components/AppCard.vue';


const viewedMoviesStore = useViewedMoviesStore()
const viewedMovies = computed(() => viewedMoviesStore.viewedMovies) //

const removeCard = (index) => viewedMoviesStore.removeMovie(index)

console.log(viewedMoviesStore.viewedMovies.length);


onMounted(() => {viewedMoviesStore.loadFromLocalStorage()
})

</script>

<style scoped>

.viewed-card-list {
  width: 80%;
  margin: 40px 150px 0px auto;
  display: flex;
  flex-wrap: wrap;
}

.viewed-card-item{
  opacity: 0.7;
}
.viewed-card-item:hover{
  opacity: 1;
}

.block-screen-scroll{
  overflow: hidden;
}

.loading-text{
  font-size: 40px;
  margin-left: 45%;
  margin-top: 15%;
  color: #fff;
}

.add-new-movie-btn{
  font-size: 20px;
  font-weight: 600;
  width: 250px;
  height: 50px;
  border-radius: 10px;
  background-color: #0B9CE0;
  cursor: pointer;
  margin-top: 2em;
}

.none-cards{
  color: #fff;
  text-align: center;
  margin-top: 10%;
  font-size: 24px;
}

.sad-smile-icon{
  width: 90px;

}

.title{
  color: white;
  text-align: center;
  font-size: 30px;
  margin-top: 5% ;
}
</style>