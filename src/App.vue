<template>
  <div>
    <app-header></app-header>
 <transition enter-active-class="animated fadeIn" mode="out-in" leave-active-class="animated fadeOut">
      <router-view></router-view>
 </transition>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import ProductList from "./components/products/ProductList";
import ProductPurchase from "./components/products/ProductPurchase";
import ProductSell from "./components/products/ProductSell";

export default {
  components: {
    appHeader: Header,
    appFooter: Footer,
    appProductList: ProductList,
    appProductPurchase: ProductPurchase,
    appProductSell: ProductSell
  },
  created(){
    this.$store.dispatch('getTradeResult');
    this.$store.dispatch('initApp');
  }
};
</script>

<style>

</style>
