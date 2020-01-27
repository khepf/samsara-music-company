import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/AboutPage.vue")
  },
  {
    path: "/media",
    name: "Media",
    component: () =>
      import(/* webpackChunkName: "media" */ "@/views/MediaPage.vue")
  },
  {
    path: "/releases",
    name: "Releases",
    component: () =>
      import(/* webpackChunkName: "releases" */ "@/views/ReleasesPage.vue")
  },
  {
    path: "/store",
    name: "Store",
    component: () =>
      import(/* webpackChunkName: "store" */ "@/views/StorePage.vue")
  },
  {
    path: "/tours",
    name: "Tours",
    component: () =>
      import(/* webpackChunkName: "tours" */ "@/views/ToursPage.vue")
  },
  {
    path: "*",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "notfound" */ "@/views/NotFoundPage.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
