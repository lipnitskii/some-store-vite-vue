<template>
  <Loader v-if="loading" />

  <div class="category-title">{{ route.params.cat }}:</div>
  <div class="category">
    <CategoryDetail v-for="category in currentCategories" :category="category" />
  </div>
  <AboutBrand />
  <Subscribe />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import api from "@/api.js";
import CategoryDetail from "@/components/CategoryDetail.vue";
import AboutBrand from "@/components/AboutBrand.vue";
import Subscribe from "@/components/Subscribe.vue";
import Loader from "@/components/UI/Loader.vue";

const route = useRoute();
const router = useRouter();
const categoriesId = ref("");
const currentCategories = ref({});
const loading = ref(true);


onMounted(async () => {
  categoriesId.value = route.params.cat;
  currentCategories.value = await api.getCategories(categoriesId.value);
  loading.value = false;
});
</script>
<style lang="scss" scoped>
.category {
  background: var(--lightgray);
  padding: 30px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 65px;
  

  &-title {
    font-size: xx-large;
    font-weight: 700;
    text-transform: uppercase;
    padding-left: 30px;
    padding-top: 30px;
    padding-bottom: 20px;
  }

  @media screen and (max-width: 767px) {
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    
    text-align: center;
    padding-bottom: 20px;
    margin: 0px auto;
    }
  }

</style>
