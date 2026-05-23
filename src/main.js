import "./styles/normalize.css";
import "./styles/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { parseLS, stringifyLS } from "./modules/modules";
if (!parseLS("lang")) {
  stringifyLS("lang", "en");
} else {
  document.body.parentElement.setAttribute("lang", parseLS("lang"));
}

const app = createApp(App);

app.use(router);

app.mount("#app");
