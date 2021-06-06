import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index";

import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

/**
 * Only allow navigation for authenticated users
 */
router.beforeEach((to, from, next) => {
  console.log(store.state.authenticated);
  if (to.name !== "Home" && !store.state.authenticated) {
    next({ name: "Home" });
  } else next();
});

/* ASYNC EXAMPLE

router.beforeEach(async (to, from, next) => {
  if (to.name !== "Home" && !store.state.authenticated) {
    next({ name: "Home" });
  } else {
    await store.dispatch("asyncAction")
    next()
  };
});

*/

export default router;
