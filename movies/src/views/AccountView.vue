<template>
  <div id="app">
    <div class="auth-container">
      <h1 v-if="!isLoggedIn">{{ isRegistering ? 'Регистрация' : 'Вход' }}</h1>
      <h1 v-else>Добро пожаловать!</h1>

      <form v-if="!isLoggedIn" @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="username">Логин</label>
          <input 
            v-model="form.username"
            :class="{'error-input': isError}"
            type="text"
            id="username" 
            
          />
        </div>

        <div class="form-group">
          <label for="password">Пароль</label>
          <input 
            v-model="form.password"
            :class="{'error-input': isError}" 
            type="password" 
            id="password"  />
        </div>

        <button type="submit">{{ isRegistering ? 'Зарегистрироваться' : 'Войти' }}</button>

        <p class="toggle-text">
          {{ isRegistering ? 'Уже есть аккаунт?' : 'Нет аккаунта?' }}
          <a href="#" @click.prevent="toggleMode">
            {{ isRegistering ? 'Войти' : 'Зарегистрироваться' }}
          </a>
        </p>
      </form>

      <div v-else>
        <p>Вы вошли как: <strong>{{ form.username }}</strong></p>
        <button @click="logout" class="button-exit">Exit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
  data() {
    return {
      isRegistering: false, // Режим регистрации или входа
      isLoggedIn: false, // Состояние входа
      isError: false,
      form: {
        username: '',
        password: '',
        correct_username: 'Artur123',
        correct_password: '123'
      },
    };
  },
  methods: {
    // проверка правильности логина/пароля для входа 
    handleSubmit() {
      if (this.form.username && this.form.username === this.form.correct_username && this.form.password && this.form.password === this.form.correct_password) {
        this.isLoggedIn = true;
        this.$router.push('/movielist')
        this.$emit("login", this.form.username);
        console.log(this.isError);
      } else {
        console.log(this.isError)
        this.isError = true;
        this.form.username = '';
        this.form.password = '';
      }
    },
    toggleMode() {
      this.isRegistering = !this.isRegistering;
    },
    logout() {
      this.isLoggedIn = false;
      this.form.username = '';
      this.form.password = '';
      this.isError = false;
    },
  },
};
</script>

<style scoped>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #111826;
  font-family: Arial, sans-serif;
}

.auth-container {
  background: #fafafc;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
}

h1 {
  margin-bottom: 1.5rem;
  color: #333;
}

.form-group {
  margin-bottom: 1rem;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #555;
}

input {
  width: 90%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.error-input{
  border: 1px solid red;
  transition: 1s;
}

button {
  width: 100%;
  padding: 0.75rem;
  border: none;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.button-exit{
  margin-top: 10px;
}

.toggle-text {
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #555;
}

a {
  color: #007bff;
  text-decoration: none;
  cursor: pointer;
}

a:hover {
  text-decoration: underline;
}
</style>
