<template>
  <section class="register">
    <b-row class="justify-content-md-center">
      <b-col cols="6">
        <h2 class="register-title mb-3">Register</h2>
        <h2>Please Register</h2>
        <div v-if="errors && errors.length">
          <div v-for="(error, index) in errors" :key="index">
            <b-alert show>{{error.message}}</b-alert>
          </div>
        </div>
        <b-form @submit="onSubmit">
          <b-form-group class="fieldsetHorizontal"
                        horizontal
                        :label-cols="4"
                        breakpoint="md"
                        label="Enter Username">
            <b-form-input id="username" v-model.trim="register.username"></b-form-input>
          </b-form-group>
          <b-form-group class="fieldsetHorizontal"
                        horizontal
                        :label-cols="4"
                        breakpoint="md"
                        label="Enter Password">
            <b-form-input type="password" id="password" v-model.trim="register.password"></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary">Register</b-button>
          <b-button type="button" variant="success" @click="$router.go(-1)">Cancel</b-button>
        </b-form>
      </b-col>
    </b-row>
  </section>
</template>

<style scoped lang="scss">
  .register {
    &-title {
      padding: 6px 12px;
      text-align: center;
      box-sizing: border-box;
      color: #ffffff;
      background-color: #293c66;
      border-radius: 32px;
    }
  }
</style>

<script>
import axios from 'axios'

export default {
  name: 'Register',
  data () {
    return {
      register: {},
      errors: []
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      axios.post(`http://localhost:3000/api/auth/register/`, this.register)
        .then(response => {
          alert('Registered successfully')
          this.$router.push({
            name: 'Login'
          })
        })
        .catch(e => {
          console.log(e)
          this.errors.push(e)
        })
    }
  }
}
</script>
