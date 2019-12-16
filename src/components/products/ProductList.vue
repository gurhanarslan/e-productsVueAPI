<template>
  <div class="container">
    <div class="row">
      <div class="col-12 mb-5 card mt-5 shadow">
        <div class="card-body">
          <h3>Ürün Listesi</h3>
          <hr />
          <table class="table table-hover table-striped table-bordered"  v-if="getProducts.length>0">
            <thead>
              <th>id</th>
              <th>Ürün Adı</th>
              <th>Adet</th>
              <th>Fiyat</th>
              <th>Açıklama</th>
            </thead>
            <tbody>
              <tr v-for="item in getProducts">
                <td class="align-middle text-center">
                  <span class="badge badge-info">{{item.key}}</span>
                </td>
                <td class="align-middle text-center">{{item.productName}}</td>
                <td class="align-middle text-center" :class="counterClass(item.count)">{{item.count}}</td>
                <td style="width: 120px;">{{item.price | currency}}</td>
                <td class="align-middle">{{item.desc}}</td>
              </tr>
            </tbody>
          </table>
          <div class="alert alert-warning" v-else>
            <strong>Henüz Burada Bir Kayıt Bulamadık</strong>
            <br />
            <small>Kayıt Eklemek için Ürün İşlemleri menüsünden yararlanabilirsiniz</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed:{
    ...mapGetters(['getProducts']),
    
  },
  methods: {
   counterClass(value){
      if(value<10){
        return 'bg-success text-white'
      }
      else if(value>10 && value<50){
        return 'bg-warning text-white'
      }
      else{
        return 'bg-danger text-white'
      }
    } 
  }
};
</script>

<style>
</style>
