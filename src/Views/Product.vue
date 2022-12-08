<template>
  <Loader v-if="loading" />
  <ProductDetail :product="currentProduct" v-else-if="currentProduct" />

  <AboutBrand />
  <Subscribe />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import api from "@/api.js";
import ProductDetail from "@/components/ProductDetail.vue";
import AboutBrand from "@/components/AboutBrand.vue";
import Subscribe from "@/components/Subscribe.vue";
import Loader from "@/components/UI/Loader.vue";

const route = useRoute();
const router = useRouter();
const productId = ref("");
const currentProduct = ref({}); 
const loading = ref(true);

 onMounted(async () => {
  productId.value = route.params.id;
  currentProduct.value = await api.getProduct(productId.value);
  loading.value = false;
} );
console.log(currentProduct)

</script>
