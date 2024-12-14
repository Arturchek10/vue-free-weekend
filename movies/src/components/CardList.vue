<template>
  <div class="main">
    <div class="div-cards-list">
      <AppCard
        v-for="(item, index) in movies"
        :key="item.id"
        :index="index"
        :card="item"
        @removeCard="$emit('removeCard', index)" 
      />
    </div>
  </div>
</template>

<script setup>
import AppCard from "@/components/AppCard.vue";


const props = defineProps({
  movies: {
    type: Array,
  },
});
</script>

<style scoped>

@media(min-width: 320px){
  .div-cards-list {
    /* width: 80%; */
    /* margin: 40px 150px 0px auto; */
    margin-left: 20px;
    display: flex;
    flex-wrap: wrap;
  }
}

@media(min-width: 1024px){
  .div-cards-list {
    width: 85%;
    margin: 80px 130px 0px auto;
    /* margin-left: 10px; */
    display: flex;
    flex-wrap: wrap;
  }
}


.button-div {
  text-align: end;
  padding-top: 20px;
  margin-right: 30px;
}
</style>
