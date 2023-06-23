import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from 'vue-router';
import Connexion from "./Connexion.vue";
import Creation from "./Creation.vue";
import Home from "./Home1.vue";
import Home2 from "./Home2.vue";
import Admin from "./Admin.vue";
import Categories from "./Categories.vue";
import Utilisateurs from "./Utilisateurs.vue";


const app = createApp(App);

const routes = [
  {
    path: '/login',
    name: 'Connexion',
    component: Connexion
  },
  {
    path: '/register',
    name: 'Creation',
    component: Creation
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home2',
    component: Home2
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/utilisateurs',
    name: 'Utilisateurs',
    component: Utilisateurs
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

app.use(router);

app.mount("#app");
