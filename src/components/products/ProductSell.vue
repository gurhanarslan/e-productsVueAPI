<template>
  <div class="container">
    <div class="row">
      <div class="col-6 offset-3 pt-3 card mt-5 shadow">
        <div class="card-body">
          <strong class="text-muted">{{alert}}</strong>

          <hr />
          <h3>Ürün Çıkışı</h3>
          <hr />
          <div class="form-group">
            <label>Ürün Adı</label>
            <select class="form-control" v-model="selectedProduct" @change="keyValue()">
              <option
                :disabled="countDisabled(item.count)"
                v-for="item in getProducts"
                :value="item.key"
                
              >{{item.productName}}</option>
            </select>
          </div>
          <div class="card mb-2 border border-danger" v-for="i in product">
            <div class="card-body">
              <div class="row">
                <div class="col-12 text-center">
                  <div class="mb-3">
                    <span class="badge badge-info">Stok : {{i.count}}</span>
                    <span class="badge badge-primary">Fiyat : {{i.price | currency}}</span>
                  </div>

                  <p class="border border-warning p-2 text-secondary">
                    <strong>Product Name : {{i.productName}}</strong>
                    <br />
                    {{i.desc}}!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label>Adet</label>
            <input
              v-model="Product_count"
              type="text"
              class="form-control"
              placeholder="Ürün adetini giriniz.."
            />
          </div>
          <hr />
          <button @click="save" :disabled="disabledSubmit" class="btn btn-primary">Kaydet</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      selectedProduct: null,
      product: [],
      Product_count: null,
      show: false,
      alert: ""
    };
  },
  computed: {
    ...mapGetters(["getProducts"]),
    disabledSubmit() {
      if (this.Product_count > 0 && this.selectedProduct.length > 0) {
        this.alert = "";
        return false;
      } else {
        this.alert =
          "* Devam edebilmek için Lütfen Ürün Adı & Satılan Adeti giriniz! ";
        return true;
      }
    }
  },

  methods: {
    keyValue() {
      console.log(this.selectedProduct);
      this.product = this.$store.getters.getProduct(this.selectedProduct);
      console.log(this.product);
    },
    countDisabled(value) {
      if (value == 0) {
        return true;
      } else {
        return false;
      }
    },

    save() {
      this.show = true;
      let product = {
        key: this.selectedProduct,
        count: this.Product_count
      };
      this.$store.dispatch("sellProduct", product);
    }
  },
  beforeRouteLeave(to, from, next) {
    if (this.show) {
      next();
    } else {
      if (
        confirm(
          "Çıkmak istediğinize Emin misiniz? Ürün satışını onaylamadınız?"
        )
      ) {
        next();
      } else {
        next(false);
      }
    }
  },
  created() {}
};
</script>

<style scoped>
.border-danger {
  border-style: dashed !important;
}
</style>