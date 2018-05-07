<template>
  <section class="product-detail">
    <b-row>
      <b-col cols="12">
        <h1 class="product-detail-title bg-info text-white mb-3">Product Detail</h1>
        <b-btn class="mb-3" :to="{ name: 'ProductList' }" variant="primary">Product List</b-btn>
        <b-jumbotron class="py-4">
          <template slot="lead">
            Name: {{ product.name }}<br>
          </template>
          <hr class="my-4">
          <p>Updated Date: {{ product.updated_date }}</p>
          <b-btn variant="success" @click.stop="editProduct(product._id)">Edit</b-btn>
          <b-btn variant="danger" @click.stop="deleteProduct(product._id)">Delete</b-btn>
        </b-jumbotron>
      </b-col>
    </b-row>
  </section>
</template>

<style scoped lang="scss">
  .product-detail {
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
  name: 'ProductDetail',
  data () {
    return {
      product: []
    }
  },
  methods: {
    fetchProduct () {
      axios.get(`http://localhost:3000/product/` + this.$route.params.id)
        .then(response => {
          this.product = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    editProduct (productid) {
      this.$router.push({
        name: 'ProductEditing',
        params: { id: productid }
      })
    },
    deleteProduct (productId) {
      axios.delete('http://localhost:3000/product/' + productId)
        .then((result) => {
          this.$router.push({
            name: 'ProductList'
          })
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  },
  created () {
    this.fetchProduct()
  }
}
</script>
