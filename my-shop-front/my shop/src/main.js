import "./assets/main.css";

import { createApp } from "vue";
import Connexion from "./Connexion.vue";
import router from "./router";

const app = createApp(Connexion);

app.use(router);

app.mount("#app");
