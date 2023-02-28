import {
  RouteRecordRaw,
  createRouter,
  /*createWebHistory, */ 
  createWebHashHistory,
  // RouteLocationNormalized,
  // NavigationGuardNext,
} from "vue-router";

function lazyLoad(view: any) {
  return () => import(`../views/${view}View.vue`);
}

const routes: RouteRecordRaw[] = [
  { path: "/", name: "/", component: lazyLoad("Home") },
];


const router = createRouter({
  history: createWebHashHistory(), // createWebHistory(),
  routes,
  scrollBehavior() {
    document.getElementById("app")?.scrollIntoView({ behavior: "smooth" });
  },
});

export default router;