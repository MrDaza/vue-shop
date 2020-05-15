import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/sites/Home.vue";

import Admin from "@/views/admin/Admin.vue";
import Overview from "@/views/admin/Overview.vue";
import Setting from "@/views/admin/Setting.vue";
import Products from "@/views/admin/Products.vue";

import { fb } from "@/config/firebase.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: "/admin/overview",
        name: "Overview",
        component: Overview
      },
      {
        path: "/admin/products",
        name: "Products",
        component: Products,
        meta: {
          reload: true
        },
      },
      {
        path: "/admin/setting",
        name: "Setting",
        component: Setting
      }
    ]
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/sites/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  //https://router.vuejs.org/guide/advanced/meta.html
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  let currentUser = fb.auth().currentUser;

  console.log("currentUser: ", [currentUser]);
  if (requiresAuth && !currentUser) {
    next("/");
    /*next({
      path: "/",
      query: { redirect: to.fullPath }
    });*/
  } else if (requiresAuth && !currentUser) {
    next();
  } else {
    next();
  }
});

export default router;
