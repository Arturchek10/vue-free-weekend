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
      <!-- <img src="/src/assets/icons/list-icon.png" class="icon-image" id="list-icon" style="display: none;"> -->
      <router-link class="menu-link" to="/movielist">ВАШ СПИСОК</router-link>
      <div class="under-menu-item">
        <router-link class="under-menu-link" :to="{name: 'viewedFilms'}"> просмотренные</router-link>
      </div>
    </div>
    <div v-if="isLoggedIn" class="user-login">
      <span>{{ username }}</span>
    </div>
    <div class="account-icon">
      <router-link class="menu-link" :to="{name: 'account'}">
        <img src="/src/assets/icons/account.svg" class="icon-image-acc">
      </router-link>
    </div>
 
  </div>  
</template>

<script>

  export default{
    props: ["isLoggedIn", "username"],
  };

</script>

<style scoped>


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
.account-icon{
  position: fixed;
  transform: translate(780px, 5px);
}
.icon-image-acc{
  position: fixed;
  display: block;
  height: 35px;
  /* padding-left: 70px;
  padding-top: 3px; */
  cursor: pointer;
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

.user-login{
  position: fixed;
  transform: translate(620px, 8px);
  font-size: 21px;
  color: #C8ACD6;
}
</style>