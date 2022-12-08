import { createRouter, createWebHistory } from "vue-router";
import Index from "@/Views/Index.vue";
import Product from "@/Views/Product.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index,
    },
    {
      path: "/products/:id",
      name: "Product",
      component: Product,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }}
});

export default router;
