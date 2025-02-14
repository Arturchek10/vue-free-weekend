<template>
  <div id="app">
    <div :class="[isMounted ? 'auth-container-view' : 'auth-container']">
      <h1>Добро пожаловать!</h1>

      <form v-if="!isLoggedIn">
        <!-- Форма авторизации -->
        <div v-if="isLoginMode">
          <div class="form-group">
            <label for="login">Логин</label>
            <input
              v-model="form.login"
              :class="{ 'error-input': isError }"
              type="text"
              id="login"
            />
          </div>

          <div class="form-group">
            <label for="password">Пароль</label>
            <input
              v-model="form.password"
              :class="{ 'error-input': isError }"
              type="password"
              id="password"
            />
          </div>

          <button type="submit" @click.prevent="handleSubmit">Войти</button>
          <p class="switch-form">
            Еще нет аккаунта? 
            <span @click="toggleFormMode" class="link">Зарегистрироваться</span>
          </p>
        </div>

        <!-- Форма регистрации -->
        <div v-else>
          <div class="form-group">
            <label for="new-login">Логин</label>
            <input v-model="form.login" type="text" id="new-login" />
          </div>

          <div class="form-group">
            <label for="new-password">Пароль</label>
            <input v-model="form.password" type="password" id="new-password" />
          </div>

          <button type="submit" @click.prevent="handleRegister">Зарегистрироваться</button>
          <p class="switch-form">
            Уже есть аккаунт? 
            <span @click="toggleFormMode" class="link">Войти</span>
          </p>
        </div>
      </form>

      <div v-else>
        <!-- Сообщение о входе -->
        <p>
          Вы вошли как: <strong>{{ form.login }}</strong>
        </p>
        <button @click="logout" class="button-exit">Выйти</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useUserStore } from "@/assets/stores/user";
import axios from "axios";

export default {
  data() {
    return {
      isLoggedIn: false, // Состояние входа
      isLoginMode: true, // Состояние переключения формы
      isError: false,
      isMounted: false,
      loggedInUser: "",
      form: {
        login: "",
        password: "",
      },
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await axios.post("http://localhost:3000/login", {
          login: this.form.login,
          password: this.form.password,
        });
        this.isLoggedIn = true;
        this.loggedInUser = response.data.login;
        const userStore = useUserStore();
        userStore.setUsername(this.form.login);
        this.$router.push("/movielist");
      } catch (error) {
        console.error("ошибка сервера или неправильный логин/пароль");
        this.isError = true;
        this.form.login = "";
        this.form.password = "";
      }
    },
    async handleRegister() {
      try {
        const response = await axios.post("http://localhost:3000/register", {
          login: this.form.login,
          password: this.form.password,
        });
        alert(response.data.message);
        this.$router.push("/movielist");
        this.toggleFormMode(); // Переключение на форму авторизации после регистрации
      } catch (error) {
        console.error("Ошибка регистрации:", error);
        alert("Ошибка регистрации. Попробуйте снова.");
      }
    },
    logout() {
      this.isLoggedIn = false;
      this.loggedInUser = "";
      this.form.login = "";
      this.form.password = "";
      this.isError = false;
    },
    toggleFormMode() {
      this.isLoginMode = !this.isLoginMode; // Переключение формы
      this.isError = false;
      this.form.login = "";
      this.form.password = "";
    },
  },
  beforeMount() {
    this.isMounted = false;
  },
  mounted() {
    setTimeout(() => {
      this.isMounted = true;
    }, 50);
  },
};
</script>
<style
  scoped
  src="C:\Users\artur\Desktop\Артур\js\free-weekend\free-week-proj\movies\src\assets\styles\account-view.css"
></style>
