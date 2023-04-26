import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "./assets/tailwind.css";
import { createPinia } from "pinia";

// createApp(App).use(router).mount("#app");

const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount("#app");
