import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import './plugins/element.js'

Vue.config.productionTip = false;

import { customers } from '@/data/data.js'

new Vue({
  data: {
    customers
  },
  router,
  render: h => h(App)
}).$mount("#app");
