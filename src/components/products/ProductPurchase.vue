<template>
  <div class="container" >
   
    <div class="row">
      <div class="col-6 offset-3 pt-3 card mt-5 shadow">
        <div class="card-body">
          <h3>Ürün İşlemleri</h3>
          <hr />
          <div class="form-group">
            <label>Ürün Adı</label>
            <input
              v-model="product.productName"
              type="text"
              class="form-control"
              placeholder="Ürün adını giriniz.."
            />
          </div>
          <div class="form-group">
            <label>Adet</label>
            <input
              v-model.number="product.count"
              type="number"
              class="form-control"
              placeholder="Ürün adetini giriniz.."
            />
          </div>
          <div class="form-group">
            <label>Fiyat</label>
            <input
              v-model.number="product.price"
              type="number"
              class="form-control"
              placeholder="Ürün fiyatı giriniz.."
            />
          </div>
          <div class="form-group">
            <label>Açıklama</label>
            <textarea
              v-model="product.desc"
              cols="30"
              rows="5"
              placeholder="Ürüne ait bir açıklama giriniz..."
              class="form-control"
            ></textarea>
          </div>
          <hr />
          <button class="btn btn-primary" :disabled="SaveEnabled" @click="saveProduct">Kaydet</button>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        productName: "",
        price: null,
        desc: "",
        count: null
      },
      show: false
    };
  },
  methods: {
    saveProduct() {
      this.$store.dispatch("saveProduct", this.product);
      this.show = true;
    }
  },
  computed: {
      isLoading(){
          if(this.show){
              return 'd-block'
          }
          else{
              return 'd-none'
          }
      },
    SaveEnabled() {
      if (
        this.product.productName.length > 0 &&
        this.product.price > 0 &&
        this.product.desc.length > 0 &&
        this.product.count > 0
      ) {
        return false;
      } else {
        return true;
      }
    }
  },
  beforeRouteLeave(to, from, next) {
    if (
      this.product.productName.length > 0 &&
      this.product.price > 0 &&
      this.product.desc.length > 0 &&
      this.product.count > 0 &&
      !this.show
    ) {
      next();
    } else {
      if (confirm("Çıkmak istediğinize Emin misiniz? Ürün Kaydedilmedi!")) {
        next();
      } else {
        next(false);
      }
    }
  }
};
</script>

<style>
</style>