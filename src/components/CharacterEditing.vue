<template>
  <section class="character-editing">
    <b-row>
      <b-col cols="12">
        <h1 class="character-editing-title bg-info text-white mb-3">Character Editing</h1>
        <b-btn class="mb-3" :to="{ name: 'CharacterDetail' }" variant="primary">Show Character</b-btn>
        <b-form @submit="onSubmit">
          <b-form-group id="fieldsetHorizontal"
                        horizontal
                        :label-cols="4"
                        breakpoint="md"
                        label="Enter Name">
            <b-form-input id="name" v-model.trim="character.name"></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="warning">Update</b-button>
        </b-form>
      </b-col>
    </b-row>
  </section>
</template>

<style scoped lang="scss">
  .character-editing {
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
  name: 'CharacterEditing',
  data () {
    return {
      character: {}
    }
  },
  methods: {
    fetchCharacter () {
      axios.get(`http://localhost:3000/character/` + this.$route.params.id)
        .then(response => {
          this.character = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
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
  },
  created () {
    this.fetchCharacter()
  }
}
</script>
