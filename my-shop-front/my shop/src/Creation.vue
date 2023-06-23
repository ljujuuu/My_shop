<template>
  <div>
    <div class="header">
      <h1 class="title">My Shoes</h1>
      <div class="search-container">
        <input type="text" class="search-bar" placeholder="Rechercher...">
      </div>
      <router-link to="/login" class="register-button">Connexion</router-link>
    </div>

    <div class="content">
      <div class="login-form">
        <h1>Créer un compte</h1>
        <form @submit.prevent="register">
          <div class="form-group">
            <label for="email">Adresse e-mail:</label>
            <input type="email" id="email" v-model="email" required>
          </div>
          <div class="form-group">
            <label for="password">Mot de passe:</label>
            <input type="password" id="password" v-model="password" required>
          </div>
          <div class="form-group">
            <label for="confirmPassword">Confirmer le mot de passe:</label>
            <input type="password" id="confirmPassword" v-model="confirmPassword" required>
          </div>
          <div class="button-container">
            <button @click="redirectToHome">Créer un compte</button>
          </div>
        </form>
        <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
        <p>
          Si vous avez déjà un compte,
          <router-link to="/login">connectez-vous</router-link>
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
        confirmPassword: '',
        errorMessage: ''
      };
    },
    methods: {
  register() {
    if (!this.email || !this.password || !this.confirmPassword) {
      this.errorMessage = 'Veuillez remplir tous les champs.';
    } else if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Les mots de passe ne correspondent pas.';
    } else {
      // Effectuer la logique d'enregistrement avec les données fournies

      // Réinitialiser les champs après l'enregistrement réussi
      this.email = '';
      this.password = '';
      this.confirmPassword = '';

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
  