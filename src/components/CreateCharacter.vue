<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Add Character
        <b-link href="/">(Character List)</b-link>
      </h2>
      <b-form @submit="onSubmit">
        <b-form-group id="fieldsetHorizontal"
                      horizontal
                      :label-cols="4"
                      breakpoint="md"
                      label="Enter Name">
          <b-form-input id="name" :state="state" v-model.trim="character.name"></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Save</b-button>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CreateCharacter',
  data () {
    return {
      character: {
        name: ''
      }
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      axios.post(`http://localhost:3000/character`, this.character)
        .then(response => {
          this.$router.push({
            name: 'CharacterDetail',
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
