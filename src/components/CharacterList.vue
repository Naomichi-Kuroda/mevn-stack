<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Character List
        <router-link :to="{ name: 'CreateCharacter' }">(Add Character)</router-link>
      </h2>
      <b-table striped hover :items="characters" :fields="fields">
        <template slot="actions" slot-scope="row">
          <b-btn size="sm" @click.stop="details(row.item)">Details</b-btn>
        </template>
      </b-table>
      <ul v-if="errors && errors.length">
        <li v-for="(error, index) in errors" :key="index">
          {{error.message}}
        </li>
      </ul>
    </b-col>
  </b-row>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CharacterList',
  data () {
    return {
      fields: {
        name: { label: 'Character Name', sortable: true },
        actions: { label: 'Action', 'class': 'text-center' }
      },
      characters: [],
      errors: []
    }
  },
  created () {
    axios.get(`http://localhost:3000/character`)
      .then(response => {
        this.characters = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  methods: {
    details (character) {
      this.$router.push({
        name: 'ShowCharacter',
        params: { id: character._id }
      })
    }
  }
}
</script>
