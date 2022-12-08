<template>
    <div class="product">
      <router-link :to="`products/${id}`" class="product-image-item">
        <img :src="img" :alt="title" class="product-image" />
      </router-link>
      <router-link :to="`products/${id}`" class="product-name">
        {{ title }}
      </router-link>
      <span class="product-price">£{{ price }}</span>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    id: {
      type: Number,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  });
  </script>
  
  <style lang="scss" scoped>
  .product {
    border: solid 0.5px #b3b3b3;
    border-radius: 5px;
    
    &-image {
      display: block;
      margin-bottom: 24px;
      object-fit: cover;
      height: 30vh;
      @media screen and (max-width: 767px) {
        height: 15vw;
      }
    }
    &-image-item{
        display: flex;
    justify-content: center;
    padding: 20px;
    }
    &-name {
      display: block;
      color: var(--dark-primary);
      font-size: 20px;
      line-height: 28px;
      font-family: var(--clash);
      margin-bottom: 8px;
      padding-left: 20px;
      padding-right: 20px;
      text-decoration: none;
      text-align: center;
      height: 55px;
      overflow: hidden;
      text-overflow: ellipsis;
      @media screen and (max-width: 767px) {
        font-size: 16px;
      }
      &:hover {
        text-decoration: underline;
      }
    }
    &-price {
       padding-bottom: 20px;
       font-weight: 600;
       text-align: center; 
      display: block;
      font-size: 18px;
      color: var(--dark-primary);
      @media screen and (max-width: 767px) {
        font-size: 15px;
      }
    }
  }
  </style>