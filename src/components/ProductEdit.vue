<template>
  <div class="product-edit">
    <h1 class="page-title">Product Edit {{ $route.params.id }}</h1>
    <form name="form">
      <div class="row">
        <div class="form-element">
          <label for="f1">商品名</label>
          <input type="text" name="product_name" id="f1" class="form-control" v-model="product.product_name" />
        </div>
        <div class="form-element">
          <label for="f2">型番</label>
          <input type="text" name="model_number" id="f2" class="form-control" v-model="product.model_number" />
        </div>
      </div>
      <div class="row">
        <div class="form-element">
          <label for="f3">公開状態</label>
          <select class="form-control" name="f0" v-model="product.display_state">
            <option value="unpublished" label="非公開">非公開</option>
            <option value="published" label="公開">公開</option>
          </select>
        </div>
        <div class="form-element">
          <label for="f0">商品状態</label>
          <select class="form-control" name="f0" v-model="product.state">
            <option value="active" label="販売中">販売中</option>
            <option value="discontinued" label="取扱終了">取扱終了</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="form-element">
          <label for="f4">原価</label>
          <input type="text" name="cost" id="f4" class="form-control" v-model="product.cost" />
        </div>
        <div class="form-element">
          <label for="f17">掛け率</label>
          <input type="number" name="markup" id="f17" class="form-control" v-model="product.markup" />
        </div>
      </div>
      <div class="row">
        <div class="form-element">
          <label for="f5">販売価格(税抜)</label>
          <input type="text" name="price" id="f5" class="form-control" v-model="product.price" />
        </div>
        <div class="form-element">
          <label for="f6">割引価格</label>
          <input type="text" name="discount_price" id="f6" class="form-control" v-model="product.discount_price" />
        </div>
      </div>
      <div class="row">
        <div class="form-element">
          <label for="f7">会員価格</label>
          <input type="text" name="members_price" id="f7" class="form-control" v-model="product.members_price" />
        </div>
        <div class="form-element">
          <label for="f8">単位</label>
          <input type="text" name="unit" id="f8" class="form-control" v-model="product.unit" />
        </div>
      </div>
      <div class="row">
        <div class="form-element">
          <label for="f9">最大購入数量</label>
          <input type="text" name="max_purchase_count" id="f9" class="form-control" v-model="product.max_purchase_count" />
        </div>
        <div class="form-element">
          <label for="f10">ラッピング</label>
          <select class="form-control" name="f10" v-model="product.wrappable">
            <option value="0" label="不可">不可</option>
            <option value="1" label="可" selected="selected">可</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="form-element">
          <label for="f11">付加画像設定</label>
          <select class="form-control" name="f11" ng-model="product.tag" >
            <option value="" label="なし">なし</option>
            <option value="new" label="NEW">NEW</option>
            <option value="sale" label="SALE">SALE</option>
            <option value="recommended" label="オススメ">オススメ</option>
            <option value="replenish" label="再入荷">再入荷</option>
          </select>
        </div>
        <div class="form-element">
          <label for="f12">JANコード</label>
          <input type="text" name="jan_code" id="f12" class="form-control" v-model="product.jan_code" />
        </div>
      </div>
      <div class="row">
        <div class="form-element">
          <label for="f13">検索エンジンタイトル</label>
          <input type="text" name="search_engine_title" id="f13" class="form-control" v-model="product.search_engine_title" />
        </div>
        <div class="form-element">
          <label for="f14">検索エンジンディスクリプション</label>
          <input type="text" name="search_engine_description" id="f14" class="form-control" v-model="product.search_engine_description" />
        </div>
      </div>
      <div class="row">
        <div class="form-element">
          <label for="f15">Facebookタイトル</label>
          <input type="text" name="facebook_title" id="f15" class="form-control" v-model="product.facebook_title" />
        </div>
      </div>
      <input type="hidden" name="image_uri" v-model="product.image_uri" />
      <div class="form-navigation">
        <button class="btn btn-lg btn-action yay" @click.prevent="updateProduct"><span class="icon thumbs"></span></button>
      </div>
    </form>
  </div>
</template>

<script>
import router from '../router'
import products from '../requestors/products-requestor'

export default {
  name: 'product-edit',

  data () {
    return {
      product: {}
    }
  },

  mounted () {
    this.getProduct()
  },

  methods: {
    getProduct () {
      products.find(this.$route.params.id).then(response => {
        this.product = response.data.data.product
      })
    },

    updateProduct () {
      products.update(this.$route.params.id, this.product).then(response => {
        router.push('/list')
      })
    }
  }
}

</script>

<style lang="scss">
</style>
