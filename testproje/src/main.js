import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ToastPlugin from "vue-toast-notification";
import "vue-toast-notification/dist/theme-bootstrap.css";
import Vue from "vue";

new Vue({
  render: (h) => h(App),
}).$mount("#app");

createApp(App)
  .use(ToastPlugin, { position: "top-right" })
  .use(router)
  .mount("#app");
