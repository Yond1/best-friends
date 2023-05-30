import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import UIKit from "@/components/UI/index";

const app = createApp(App);

UIKit.forEach((UI) => {
  app.component(UI.name, UI);
});

app.mount("#app");
