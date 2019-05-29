import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import './plugins/element.js'

Vue.config.productionTip = false;

import { costumers,cars,tipulim } from '@/data/data.js'

new Vue({
  data: {
    costumers,cars,tipulim
  },
  router,
  render: h => h(App)
}).$mount("#app");
