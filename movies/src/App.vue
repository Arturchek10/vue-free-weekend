<template>
  <div>
    <header>
      <HeaderView :is-logged-in="isLoggedIn" :username="username" />
      <p>hello</p>
    </header>
    <div class="main">
      <router-view @login="handleLogin" />
    </div>  
  </div>
</template>

<script>
  import HeaderView from './components/Header.vue';

  export default {
  data() {
    return {
      isLoggedIn: false,
      username: '',
    };
  },
  methods: {
    handleLogin(username) {
      this.isLoggedIn = true;
      this.username = username;
    },
  },
  components: {
    HeaderView,
  },
};
</script>