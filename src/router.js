import { createRouter, createWebHistory } from "vue-router";
import Index from "@/Views/Index.vue";
import Product from "@/Views/Product.vue";
import CategoriesList from "@/Views/CategoriesList.vue";
import Cart from "@/Views/Cart.vue";

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
    {
    path: "/categories/:cat",
    name: "CategoriesList",
    component: CategoriesList,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }}
});

export default router;
