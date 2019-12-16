import Vue from 'vue'
import { router } from '../../router'
const state = {
    products:[]
}
const getters= {
    getProducts(state){
        return state.products;
    },
    getProduct(state){
        return key=> state.products.filter(response =>{
            return response.key == key
           
        })
    }
}

const mutations= {
    updateProductList(state,product){
        state.products.push(product);
    }
}

const actions= {
     initApp({commit})   {
     //vue-resource
     Vue.http.get('https://vue-products-1239f.firebaseio.com/product.json')
     .then((response)=>{
         let data = response.body
         for(let key in data){
            data[key].key = key;
            commit('updateProductList',data[key])
         }
         console.log(data)
     })
     },
     saveProduct({dispatch,commit},payload){
             //vue-resource
        Vue.http.post('https://vue-products-1239f.firebaseio.com/product.json',payload).then((response)=>{
            payload.key= response.body.name;
            commit('updateProductList',payload)

        })
        let tradeResult={
            purchase:payload.price,
            count:payload.count,
            sale:0
        }
        dispatch('setActionTradeResult',tradeResult)
        router.replace('/')
    },
     sellProduct({commit,state,dispatch},payload)
{
     let product = state.products.filter(response =>{
        return response.key == payload.key
    })
    if(product){
        let totalCount = product[0].count - payload.count;
        Vue.http.patch('https://vue-products-1239f.firebaseio.com/product/'+payload.key+'.json',{ count: totalCount})
        .then(response=>{
            console.log(response);
            product[0].count=totalCount
            let tradeResult={
                purchase:0,
                count:payload.count,
                sale:product[0].price
            }
            dispatch('setActionTradeResult',tradeResult)
            router.replace('/')
        })
    }
         //vue-resource
}
    }

export default{
    state,
    getters,
    mutations,
    actions
}