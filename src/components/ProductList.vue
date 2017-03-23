<template>
  <div class="product-list">
    <h1 class="page-title">Product List</h1>
    <table class="table table-hover">
      <thead>
        <tr>
          <!-- <th><button class="btn btn-sm btn-default checkbox-btn" ng-class="{ active: vm.allSelected() }" ng-click="vm.allSelected() ? vm.deselectAll() : vm.selectAll()"><i class="glyphicon glyphicon-ok icon"></i></button></th> -->
          <th nowrap="nowrap">商品画像</th>
          <th nowrap="nowrap">商品名</th>
          <th nowrap="nowrap">型番</th>
          <th nowrap="nowrap">公開状態</th>
          <th nowrap="nowrap">ショップ在庫</th>
          <th nowrap="nowrap">処理</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products">
          <!-- <td><button class="btn btn-sm btn-default checkbox-btn" ng-class="{ active: vm.isSelected(product.id) }" ng-click="vm.isSelected(product.id) ? vm.deselect(product.id) : vm.select(product.id)"><i class="glyphicon glyphicon-ok icon"></i></button></td> -->
          <td><img class="image" :src="imageUrl(product.image_uri)" /></td>
          <td><router-link :to="'/edit/' + product.id">{{ product.product_name }}</router-link></td>
          <td nowrap="nowrap">{{ product.model_number }}</td>
          <td class="center">{{ displayState(product.display_state) }}</td>
          <td class="center">{{ product.public_stock }}</td>
          <td class="list-action-cell" nowrap="nowrap">
            <!-- <div ng-if="vm.selected.length <= 1">
              <a class="btn btn-sm btn-default" ng-href="edit/{{ product.id }}">編集</a>
              <button class="btn btn-sm btn-default" ng-click="vm.previewProduct(product)">プレビュー</button>
              <div class="btn-group btn-group-danger">
                <button type="button" class="btn btn-sm dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">削除<span class="caret"></span></button>
                <ul class="dropdown-menu">
                  <li><a href="#" ng-click="vm.deleteProduct(product.id)" class="btn-sm">本当に削除します！</a></li>
                </ul>
              </div>
              <button class="btn btn-sm btn-default" ng-click="vm.duplicateProduct(product.id)">コピー</button>
            </div>
            <div ng-if="vm.selected.length > 1 && vm.isSelected(product.id)">
              <a class="btn btn-sm btn-default" href="edit/multiple">商品一括編集</a>
            </div> -->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import products from '../requestors/products-requestor'

export default {
  name: 'product-list',

  data () {
    return {
      products: []
    }
  },

  mounted () {
    this.getProducts()
  },

  methods: {
    imageUrl (uri) {
      return 'https://s3-ap-northeast-1.amazonaws.com' + uri
    },

    displayState (state) {
      let label = ''
      switch (state) {
        case 'unpublished':
          label = '非公開'
          break
        case 'published':
          label = '公開'
          break
      }
      return label
    },

    getProducts () {
      products.all().then(response => {
        this.products = response.data.data.products
      })
    }
  }
}
</script>

<style lang="scss">
</style>
