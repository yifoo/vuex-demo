<template>
  <div class="cart">
    <ul>
      <li v-for="(product,id) in cartProducts" :key="id">
        名称:{{product.title}}
        数量:{{product.quantity}}
        总价:{{product.totalPrice}}
      </li>
      <p v-if="cartProducts.length==0">当前购物车为空</p>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters({
    cartProducts: 'cartProducts'
  })
}
</script>
<style scoped>
  p{
    color: red
  }
</style>
