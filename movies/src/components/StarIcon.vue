<template>
  <div class="main">
    <div class="star" @click="toggleStar">
      <div v-if="!props.isClick">
        <img
        class="star-item" 
        src='@/assets/icons/white-star.png'
        />
      </div>
      <div v-else>
        <img
        class="star-item" 
        src='@/assets/icons/star.png'
        />
      </div>

    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  isClick: {
    type: Boolean,
    default: false,
  },
  index: {
    type: Number
  }
});

const emit = defineEmits(['changeStarToggle'])

const toggleStar = () => {
  emit('changeStarToggle', props.index)
}
</script>

<style scoped>
.star-item {
  margin-right: 3px;
  cursor: pointer;
}
</style>
