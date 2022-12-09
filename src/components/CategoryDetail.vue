<template>
    
    <div>
       <Product
          :id="category.id"
          :key="category.id"
          :img="category.image"
          :title="category.title"
          :price="category.price"
        />

    </div>
  </template>
  
  <script setup>
  import Product from "./Product.vue"
  
  const props = defineProps({
    category: {
      type: Object,
      default: () => {},
      required: true,
    },
  }); 
  
  </script>
  
 <style scoped>
 .product {
  width: 34vw;
 }


</style>
  