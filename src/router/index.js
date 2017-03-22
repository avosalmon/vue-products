import Vue from 'vue'
import Router from 'vue-router'
import ProductList from '@/components/ProductList'
import ProductCreate from '@/components/ProductCreate'
import ProductEdit from '@/components/ProductEdit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/list',
      name: 'ProductList',
      component: ProductList
    },
    {
      path: '/create',
      name: 'ProductCreate',
      component: ProductCreate
    },
    {
      path: '/edit/:id',
      name: 'ProductEdit',
      component: ProductEdit
    },
    {
      path: '*',
      redirect: '/list'
    }
  ]
})
