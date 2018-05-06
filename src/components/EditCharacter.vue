<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Edit Character
        <router-link :to="{ name: 'CharacterDetail', params: { id: character._id } }">(Show Character)</router-link>
      </h2>
      <b-form @submit="onSubmit">
        <b-form-group id="fieldsetHorizontal"
                      horizontal
                      :label-cols="4"
                      breakpoint="md"
                      label="Enter Name">
          <b-form-input id="name" :state="state" v-model.trim="character.name"></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Update</b-button>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>
import axios from 'axios'

export default {
  name: 'EditCharacter',
  data () {
    return {
      character: {}
    }
  },
  created () {
    axios.get(`http://localhost:3000/character/` + this.$route.params.id)
      .then(response => {
        this.character = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      axios.put(`http://localhost:3000/character/` + this.$route.params.id, this.character)
        .then(response => {
          this.$router.push({
            name: 'CharacterDetail',
            params: { id: this.$route.params.id }
          })
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
}
</script>
