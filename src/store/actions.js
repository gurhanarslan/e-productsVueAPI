import Vue from 'vue'
export const setActionTradeResult = ({state,commit},tradeResult) =>{
 commit('setTradeResult',tradeResult)
 let result={
     purchase: state.purchase,
     sale :state.sale
 }
 Vue.http.put('https://vue-products-1239f.firebaseio.com/trade-product.json', result)
 .then((response) =>{
     console.log(response)
 })
}

export const getTradeResult = ({commit}) =>{
    Vue.http.get('https://vue-products-1239f.firebaseio.com/trade-product.json')
    .then((response)=>{
        console.log(response)
        commit('setTradeResult',response.body)
    })
}