import Vue from "vue";
import Router from "vue-router";
import Hello from "../components/Hello";
import DynamicParam from "../components/DynamicParam";

Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      component: Hello
    },
    {
      path: "/dynamic/:type",
      component: DynamicParam,
      props: true
    }
  ]
});
