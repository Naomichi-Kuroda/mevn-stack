<template>
  <section class="product-list">
    <b-row>
      <b-col cols="12">
        <h1 class="product-list-title bg-info text-white mb-3">Product List</h1>
        <b-btn class="mb-3" :to="{ name: 'ProductCreation' }" variant="primary">Add Product</b-btn>
        <b-table class="product-list-table" striped hover :items="products" :fields="fields">
          <template slot="actions" slot-scope="row">
            <b-btn size="sm" variant="outline-secondary" :to="{ name: 'ProductDetail', params: { id: row.item._id } }">Detail</b-btn>
            <b-btn size="sm" variant="outline-success" :to="{ name: 'ProductEditing', params: { id: row.item._id } }">Edit</b-btn>
            <b-btn size="sm" variant="outline-danger" @click.stop="deleteProduct(row.item._id)">Delete</b-btn>
          </template>
        </b-table>
        <ul v-if="errors && errors.length">
          <li v-for="(error, index) in errors" :key="index">
            {{error.message}}
          </li>
        </ul>
      </b-col>
    </b-row>
  </section>
</template>

<style scoped lang="scss">
  .product-list {
    &-title {
      padding: 8px 16px;
      font-size: 2rem;
      text-align: center;
      box-sizing: border-box;
      border-radius: 32px;
    }
  }
</style>

<script>
import axios from 'axios'

export default {
  name: 'ProductList',
  data () {
    return {
      fields: {
        name: { label: 'Product Name', sortable: true, 'class': 'align-middle' },
        actions: { label: 'Action', 'class': 'text-center' }
      },
      products: [],
      errors: []
    }
  },
  methods: {
    setJwtToken () {
      axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken')
    },
    fetchProductList () {
      axios.get(`http://localhost:3000/product`)
        .then(response => {
          this.products = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    deleteProduct (productId) {
      axios.delete('http://localhost:3000/product/' + productId)
        .then((result) => {
          this.$router.push({
            name: 'ProductList'
          })
          this.fetchProductList()
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  },
  created () {
    this.setJwtToken()
    this.fetchProductList()
  }
}
</script>
