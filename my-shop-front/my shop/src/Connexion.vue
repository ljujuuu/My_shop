<template>
  <div>
    <div class="header">
      <h1 class="title">My Shoes</h1>
      <div class="search-container">
        <input type="text" class="search-bar" placeholder="Rechercher...">
      </div>
      <router-link to="/register" class="register-button">Inscription</router-link>
    </div>

    <div class="content">
      <div class="login-form">
        <h1>Page de connexion</h1>
        <form @submit.prevent="login">
          <div class="form-group">
            <label for="email">Adresse e-mail:</label>
            <input type="email" id="email" v-model="email" required>
          </div>
          <div class="form-group">
            <label for="password">Mot de passe:</label>
            <input type="password" id="password" v-model="password" required>
          </div>
          <div class="button-container">
            <button @click="login">Se connecter</button>
            <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
          </div>
        </form>
        <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
        <p>
          Si vous n'avez pas encore de compte,
          <router-link to="/register">inscrivez-vous</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import bcrypt from 'bcryptjs';

export default {
  data() {
    return {
      email: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
  login() {
    if (!this.email || !this.password) {
      this.errorMessage = 'Veuillez remplir tous les champs.';
    } else {
      // Effectuer la logique de connexion avec les données fournies

      // Réinitialiser les champs après la connexion réussie
      this.email = '';
      this.password = '';

      // Redirection vers la page Home
      this.$router.push('/home');
    }
  }
}
};
</script>

<style scoped>
.error {
  color: red;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.title {
  margin-right: auto;
}

.search-bar {
  width: 300px;
  height: 30px;
}

.register-button {
  text-decoration: none;
  padding: 8px 12px;
  background-color: #007bff;
  color: #fff;
  border-radius: 4px;
}

.search-container {
  flex-grow: 1;
  display: flex;
  justify-content: center;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 70vh;
}

.login-form {
  text-align: center;
}

.button-container {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}

.form-group {
  margin-bottom: 10px;
}
</style>
