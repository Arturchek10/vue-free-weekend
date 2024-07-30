<template>
  <header>
    <HeaderView />
    <p>hello</p>
  </header>
  <div class="main">
    <router-view />
  </div>  
</template>

<script setup>
  import HeaderView from './components/Header.vue';
</script>