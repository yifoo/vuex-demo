<template>
<div class="shop">
  <Products/>
  <h2>购物车</h2>
  <ShoppingCart/>
</div>
</template>
<script>
import Products from './Products.vue'
import ShoppingCart from './ShoppingCart.vue'
export default {
  components: {Products, ShoppingCart}
}
</script>
