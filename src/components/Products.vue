<template>
  <div>
    <h1>产品</h1>
    <ul>
      <li v-for="(item,key) in productList" :key="key">
        <a>{{item.title}}</a>
        单价:{{item.price}}
        数量:
        <div class="product">
          <button @click='addNum(item)'>+</button>
          <a class="quantity">{{item.inventory}}</a>
          <button @click='deNum(item)'>-</button>
          <button @click='addToCart(item)' class="btn-cart">添加到购物车</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  computed: mapGetters({
    productList: 'allProducts'
  }),
  methods: mapActions([
    'addNum',
    'deNum',
    'addToCart'
  ]),
  created () {
    this.$store.dispatch('getAllProducts')
  }
}
</script>
<style>
  li {
    height: 30px
  }
  .product{
    float: right
  }
  .quantity{
    display:inline-block;
    line-height:20px;
    color:red;
    width:20px;
    text-align:center;
  }
  .btn-cart{
    float: right;
  }
</style>
