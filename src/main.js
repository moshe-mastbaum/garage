import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./plugins/element.js";

Vue.config.productionTip = false;

import { customers, cars, tipulim, lastTipulid } from "@/data/data.js";

new Vue({
  data: {
    customers,
    cars,
    tipulim,
    lastTipulid
  },
  router,
  render: h => h(App)
}).$mount("#app");
