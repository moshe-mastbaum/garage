import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import NewCustomer from "./views/NewCustomer.vue";
import costumer from "./views/costumer.vue";
import car from "./views/car.vue";



Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/newcustomer",
      name: "newcustomer",
      component: NewCustomer
    },
    {
      path: "/costumer",
      name: "costumer",
      component: costumer
    }, 
    {
      path: "/car/:carnumber",
      name: "car",
      props: true,
      component: car
    },   
    

    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
