import { createApp } from "vue";
// Import scss (bootstrap's css inside)
import "./scss/style.scss";
import App from "./App.vue";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

// Import router
import { router } from "./router";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router).mount("#app");
