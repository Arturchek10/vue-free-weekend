<template>
  <div class="main">
    <div class="title">
      <h1>Добро пожаловать на MovieCard!</h1>
    </div>
    <div class="body">
      <h3>Ваш личный киноархив</h3>
      <p>На нашем сайте вы можете создавать собственный список фильмов, добавлять карточки с вашими любимыми фильмами, а также делиться ими с друзьями. Организуйте свою коллекцию и всегда будьте в курсе, что стоит посмотреть дальше!</p>

      <h3>Что вы можете сделать на MovieCard?</h3>
      <ul>
        <li>Создавайте и управляйте карточками фильмов: Добавляйте новые фильмы в свою коллекцию, указывая название, описание, жанр и даже постеры.</li>
        <li>Делитесь своими любимыми фильмами: Поделитесь вашими рекомендациями с друзьями и семьей, используя уникальные ссылки на каждую карточку.</li>
        <li>Легкий поиск и фильтрация: Находите фильмы в вашей коллекции по жанру, названию или другим параметрам.</li>
      </ul>
      <video style="width: 1000px; margin-top: 20%; margin-left: -130px; margin-bottom: 50px;"  controls autoplay loop muted><source src="/src/assets/videos/video-for-homepage.mp4" type="video/mp4"></video>
      <h3 >ПРИЯТНОГО ПОЛЬЗОВАНИЯ !</h3>
    </div>

    <Footer />
  </div>
</template>

<script setup>
  import Footer from '@/components/Footer.vue';
</script>

<style scoped>

.main{
  margin-top: 3%;
  color: aliceblue;
  padding-top: 40px;
  width: 100%;
}

.title{
  text-align: center;
  margin-bottom: 5%;
}
.body{
  text-align: center;
  width: 50%;
  margin-left: 25%;
  font-size: 20px;
  line-height: 1.5;
}
.body h3 {
  padding: 20px;
}



</style>