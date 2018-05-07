import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import ProductList from '@/components/ProductList'
import ProductDetail from '@/components/ProductDetail'
import ProductCreation from '@/components/ProductCreation'
import ProductEditing from '@/components/ProductEditing'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/',
      name: 'ProductList',
      component: ProductList
    },
    {
      path: '/show-product/:id',
      name: 'ProductDetail',
      component: ProductDetail
    },
    {
      path: '/product-creation',
      name: 'ProductCreation',
      component: ProductCreation
    },
    {
      path: '/edit-product/:id',
      name: 'ProductEditing',
      component: ProductEditing
    }
  ]
})
