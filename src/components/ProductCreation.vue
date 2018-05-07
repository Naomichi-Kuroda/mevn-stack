<template>
  <section class="product-creation">
    <b-row>
      <b-col cols="12">
        <h1 class="product-creation-title bg-info text-white mb-3">Product Creation</h1>
        <b-btn class="mb-3" :to="{ name: 'ProductList' }" variant="primary">Product List</b-btn>
        <b-form @submit="onSubmit">
          <b-form-group id="fieldsetHorizontal"
                        horizontal
                        :label-cols="2"
                        breakpoint="md"
                        label="Enter Name">
            <b-form-input id="name" v-model.trim="product.name"></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="warning">Save</b-button>
        </b-form>
      </b-col>
    </b-row>
  </section>
</template>

<style scoped lang="scss">
  .product-creation {
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
  name: 'ProductCreation',
  data () {
    return {
      product: {
        name: ''
      }
    }
  },
  methods: {
    onSubmit (event) {
      event.preventDefault()
      axios.post(`http://localhost:3000/product`, this.product)
        .then(response => {
          this.$router.push({
            name: 'ProductDetail',
            params: { id: response.data._id }
          })
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
}
</script>
