import Home from './components/products/ProductList'
import ProductPurchase from './components/products/ProductPurchase'
import ProductSell from './components/products/ProductSell'
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter);

export const routes = [
    {path:'/', component:Home, name:'homePage'},
    {path:'/productPurchase',component:ProductPurchase, name:'purchase'},
    {path:'/productSell',component:ProductSell , name:'sell'},
    {path:'*', redirect: '/'}

]

export const router = new VueRouter({
    routes,
    mode:'history'
  })