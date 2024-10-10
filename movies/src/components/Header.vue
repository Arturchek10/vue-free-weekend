<template>
  <div class="container">
    <div class="mooli-logo">
      <router-link to="/home"><img src="/src/assets/icons/mooli-logo.png" alt=""></router-link>
    </div>
    <div class="menu-item">
      <img src="/src/assets/icons/home-icon.png" class="icon-image">
      <router-link class="menu-link" to="/home">ДОМОЙ</router-link>
    </div>
    <div class="menu-item">
      <img src="/src/assets/icons/list-icon.png" class="icon-image" id="list-icon">
      <router-link class="menu-link" to="/movielist">ВАШ СПИСОК</router-link>
      <div class="under-menu-item">
        <router-link class="under-menu-link" :to="{name: 'viewedFilms'}"> просмотренные</router-link>
      </div>
    </div>
  </div>  
</template>

<script setup>

</script>

<style scoped>

/* @media (min-width: 320px){
  .container{
    position: fixed;
    display: flex;
    background: #4F1787;
    padding-left: 3%;
    height: 30px;
    width: 100%;
    padding-top: 10px;
    z-index: 100;
  }
  .mooli-logo{
    display: none;
  }
  .icon-image{
    display: none;
  }
}

@media (min-width: 1024px) {
  .container{
      position: fixed;
      display: flex;
      background: #4F1787;
      padding-left: 30%;
      height: 50px;
      width: 100%;
      padding-top: 20px;
      z-index: 100;
    }
  } */


@media (min-width: 900px){
  .container{
    position: fixed;
    display: flex;
    background: #4F1787;
    padding-left: 30%;
    height: 50px;
    width: 100%;
    padding-top: 20px;
    z-index: 100;
  }

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
  display: block;
  height: 35px;
  padding-right:  10px;
}
#list-icon{
  width: 30px;
}

.menu-link{
  text-decoration: none;
  color: #C8ACD6;
}
.menu-link:hover{
  color: white;
}

.under-menu-item{
  margin-left: 10px;
}

.under-menu-link{
  text-decoration: none;
  color: #C8ACD6;
  font-size: 16px;
}
.under-menu-link:hover{
  color: white;
}

.mooli-logo{
  margin-right: 40px;
  transform: translate(-20px, 0px);
  text-decoration: none;
}
.mooli-logo img {
  width: 90px;
  transform: translateY(-5px);
}
</style>