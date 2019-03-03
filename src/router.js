import Vue from "vue";
import Router from "vue-router";
import BaseHome from "@/views/BaseHome.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: BaseHome
    },
    {
      path: "/search",
      name: "search",
      component: () =>
        import(/* webpackChunkName: "search" */ "@/views/ProductResults.vue")
    },
    {
      path: "/event/:eventId",
      name: "event",
      component: () =>
        import(/* webpackChunkName: "search" */ "@/views/ProductInformation.vue")
    }
  ]
});
