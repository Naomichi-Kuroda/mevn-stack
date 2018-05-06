<template>
  <section class="character-creation">
    <b-row>
      <b-col cols="12">
        <h2 class="character-creation-title mb-3">Character Creation</h2>
        <b-btn class="mb-3" :to="{ name: 'CharacterList' }" variant="primary">Character List</b-btn>
        <b-form @submit="onSubmit">
          <b-form-group id="fieldsetHorizontal"
                        horizontal
                        :label-cols="2"
                        breakpoint="md"
                        label="Enter Name">
            <b-form-input id="name" v-model.trim="character.name"></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary">Save</b-button>
        </b-form>
      </b-col>
    </b-row>
  </section>
</template>

<style scoped lang="scss">
  .character-creation {
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
  name: 'CharacterCreation',
  data () {
    return {
      character: {
        name: ''
      }
    }
  },
  methods: {
    onSubmit (event) {
      event.preventDefault()
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
