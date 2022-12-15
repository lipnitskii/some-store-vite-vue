<template>
    <div class="pt-nav">
      <CartItems />
      <AboutBrand />
      <PopularProducts />
      <Ideas />
      <Subscribe />
    </div>
  </template>
  
  <script setup>
  import CartItems from "@/components/CartItems.vue";
  import AboutBrand from "@/components/AboutBrand.vue";
  import Ideas from "@/components/Ideas.vue";
  import Subscribe from "@/components/Subscribe.vue";
  import PopularProducts from "@/components/PopularProducts.vue";
  </script>