<template>
  <div class="main">
    <div class="button-div">
      <button class="add-movie-btn" @click="$emit('open-form')">add movie</button>
    </div>
    <div class="div-cards-list">
      <AppCard v-for="(item, index) in movies"
      :key="item.id"
      :index="index"
      :card="item" />
    </div>
</div>
</template>

<script setup>
import { ref } from "vue";
import AppCard from "@/components/AppCard.vue"

const props = defineProps({
  movies: {
    type: Array
  }
})


</script>

<style scoped>

.div-cards-list{
  width: 80%;
  margin: 40px auto;
  display: flex;
  flex-wrap: wrap;
}

.add-movie-btn{
  width: 90px;
  height: 30px;
  border-radius: 10px;
  background-color: #0B9CE0;
  cursor: pointer;
}
.button-div{
  text-align: end;
  padding-top: 20px;
  margin-right: 30px;
}
</style>
