import { createApp } from "vue";
// Import scss (bootstrap's css inside)
import "./scss/style.scss";
import App from "./App.vue";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

// Import router
import { router } from "./router";

createApp(App).use(router).mount("#app");
