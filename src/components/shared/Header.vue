<template>
  <nav class="navbar navbar-expand-lg navbar-dark" :style="bcgc">
    <div class="navbar-brand">
      <router-link tag="a" to="/" class="text-white nav-link" active-class="bg-secondary rounded-bottom  animated flash" exact>E-Products</router-link>
    </div>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <router-link tag="li" to="/productPurchase" class="nav-item" active-class="bg-secondary rounded-bottom  animated flash" exact>
          <a class="nav-link">Ürün İşlemleri</a>
        </router-link>
        <router-link tag="li" to="/productSell" class="nav-item" active-class="bg-secondary rounded-bottom animated flash" exact>
          <a class="nav-link">Ürün Satış İşlemleri</a> 
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data(){
    return{
  
     
    }
  },
  computed:{
    bcgc(){
      return {
        backgroundColor: 'rgb(47, 4, 53)'
      }
    }
  },
  methods:{

  },

  beforeMount(){
    this.interval()
  }
};
</script>

<style>
.a{
  background: rgb(47, 4, 53)
}
</style>