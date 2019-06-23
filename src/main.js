import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./plugins/element.js";
import axios from "axios";

Vue.prototype.$axios= axios;
// Vue.prototype.$customers= this.$axios.get('http://localhost:3000/customers').then((response) => this.customers = response.data);

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
