<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Edit Character
        <b-link href="/">(Character List)</b-link>
      </h2>
      <b-jumbotron>
        <template slot="header">
          {{character._id}}
        </template>
        <template slot="lead">
          Name: {{character.nem}}<br>
        </template>
        <hr class="my-4">
        <p>
          Updated Date: {{character.updated_date}}
        </p>
        <b-btn variant="success" @click.stop="editCharacter(character._id)">Edit</b-btn>
        <b-btn variant="danger" @click.stop="deleteCharacter(character._id)">Delete</b-btn>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ShowCharacter',
  data () {
    return {
      character: []
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
  }
}
</script>

<style>
  .jumbotron {
    padding: 2rem;
  }
</style>
