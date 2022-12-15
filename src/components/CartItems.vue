<template>
    <div class="cart-title">
        You shopping cart
    </div>
    <div class="cart-items">
        <div class="cart-items-title-product">Product</div>
        <div class="cart-items-title">Quantuty</div>
        <div class="cart-items-title">Total</div>
    </div>
    <div class="cart-items" v-if="cartStore.cart.length > 0" v-for="cartItem of cartStore.cart">

        <div class="cart-items-title-product">
            <div class="cart-items-title-product-item">
                <div class="cart-items-title-product-item-img"><img :src="cartItem.image" :alt="cartItem.name" /></div>
                <div class="cart-items-title-product-item-description">
                    <div class="cart-items-title-product-item-description-title">{{ cartItem.title }}</div>
                    <div class="cart-items-title-product-item-description-about">{{ cartItem.description }}</div>
                    <div class="cart-items-title-product-item-description-price">£{{ cartItem.price }}</div>
                </div>
            </div>
        </div>
        <div class="cart-items-title">{{ cartItem.count }}</div>
        <div class="cart-items-title">£{{ cartItem.count * cartItem.price }}</div>

    </div>
    <div class="cart-items-footer">
        <div class="cart-items-footer-count">
            Subtotal: 
        </div>

    </div>
</template>

<script setup>
import { useCartStore } from "@/store/cart.js";
const cartStore = useCartStore();
</script>


<style lang="scss">
.cart {
    &-title {
        font-family: 'Clash Display';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 140%;
        padding-left: 150px;
        max-width: 1440px;
    }

    &-items {
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        max-width: 1440px;
        padding-bottom: 30px;
        padding-top: 30px;
        margin: 0 150px;

        &-title {
            width: 15%;
            text-align: right;
        }

        &-title-product {
            width: 70%;

            &-item {
                display: flex;
                flex-wrap: nowrap;
                width: 100%;

                &-img {

                    width: 110px;
                    height: 135px;
                    padding-bottom: 20px;
                }

                &-description {

                    width: 70%;
                    padding-left: 20px;

                    &-title {
                        font-family: 'Clash Display';
                        font-style: normal;
                        font-weight: 500;
                        font-size: 20px;
                        line-height: 140%;
                        padding-bottom: 10px;
                    }

                    &-about {
                        font-family: 'Satoshi';
                        font-style: normal;
                        font-weight: 400;
                        font-size: 14px;
                        line-height: 150%;
                        padding-bottom: 10px;
                    }

                    &-price {
                        font-family: 'Satoshi';
                        font-style: normal;
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 150%;
                    }
                }
            }
        }
        &-footer{
            padding-top: 20px;
            text-align: right;
            &-count{
                font-family: 'Clash Display';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 140%;
            }
        }
    }



}
</style>