<template>
  <div class="container">
    <div class="menu-item">
      <img src="/src/assets/icons/home-icon.png" class="icon-image">
      <router-link class="menu-link" to="/home">HOME</router-link>
    </div>
    <div class="menu-item">
      <img src="/src/assets/icons/list-icon.png" class="icon-image" id="list-icon">
      <router-link class="menu-link" to="/movielist">MOVIE LIST</router-link>
    </div>
  </div>  
</template>

<script setup>

</script>

<style scoped>

.container{
  position: fixed;
  display: flex;
  background: #4F1787;
  padding-left: 40%;
  height: 50px;
  width: 100% ;
  padding-top: 20px;
  z-index: 100;
}
.container p {
  margin-right: 30px;
}

.menu-item{
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.5s;
  margin-right: 20px;
}
.menu-item:hover{
  color: white;
}
.icon-image{
  height: 40px;
  padding-right:  10px;
}
#list-icon{
  width: 35px;
  height: 35px;
}

.menu-link{
  text-decoration: none;
  color: #C8ACD6;
}
.menu-link:hover{
  color: white;
}
</style>