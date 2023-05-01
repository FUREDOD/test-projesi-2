import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ToastPlugin from "vue-toast-notification";
import "vue-toast-notification/dist/theme-bootstrap.css";

createApp(App)
  .use(ToastPlugin, { position: "top-right" })
  .use(router)
  .mount("#app");
