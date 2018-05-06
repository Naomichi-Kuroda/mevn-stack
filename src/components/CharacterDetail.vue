<template>
  <section class="character-detail">
    <b-row>
      <b-col cols="12">
        <h2 class="character-detail-title mb-3">Character Detail</h2>
        <b-btn class="mb-3" :to="{ name: 'CharacterList' }" variant="primary">Character List</b-btn>
        <b-jumbotron class="py-4">
          <template slot="lead">
            Name: {{ character.name }}<br>
          </template>
          <hr class="my-4">
          <p>Updated Date: {{ character.updated_date }}</p>
          <b-btn variant="success" @click.stop="editCharacter(character._id)">Edit</b-btn>
          <b-btn variant="danger" @click.stop="deleteCharacter(character._id)">Delete</b-btn>
        </b-jumbotron>
      </b-col>
    </b-row>
  </section>
</template>

<style scoped lang="scss">
  .character-detail {
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
  name: 'CharacterDetail',
  data () {
    return {
      character: []
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
    editCharacter (characterid) {
      this.$router.push({
        name: 'EditCharacter',
        params: { id: characterid }
      })
    },
    deleteCharacter (characterid) {
      axios.delete('http://localhost:3000/character/' + characterid)
        .then((result) => {
          this.$router.push({
            name: 'CharacterList'
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
