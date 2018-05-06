<template>
  <section class="character-list">
    <b-row>
      <b-col cols="12">
        <h2 class="character-list-title mb-3">Character List</h2>
        <b-btn class="mb-3" :to="{ name: 'CreateCharacter' }" variant="primary">Add Character</b-btn>
        <b-table class="character-list-table" striped hover :items="characters" :fields="fields">
          <template slot="actions" slot-scope="row">
            <b-btn size="sm" variant="outline-secondary" :to="{ name: 'CharacterDetail', params: { id: row.item._id } }">Detail</b-btn>
            <b-btn size="sm" variant="outline-success" :to="{ name: 'EditCharacter', params: { id: row.item._id } }">Edit</b-btn>
            <b-btn size="sm" variant="outline-danger" @click.stop="deleteCharacter(row.item._id)">Delete</b-btn>
          </template>
        </b-table>
        <ul v-if="errors && errors.length">
          <li v-for="(error, index) in errors" :key="index">
            {{error.message}}
          </li>
        </ul>
      </b-col>
    </b-row>
  </section>
</template>

<style scoped lang="scss">
  .character-list {
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
  name: 'CharacterList',
  data () {
    return {
      fields: {
        name: { label: 'Character Name', sortable: true, 'class': 'align-middle' },
        actions: { label: 'Action', 'class': 'text-center' }
      },
      characters: [],
      errors: []
    }
  },
  methods: {
    fetchCharacterList () {
      axios.get(`http://localhost:3000/character`)
        .then(response => {
          this.characters = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    deleteCharacter (characterId) {
      axios.delete('http://localhost:3000/character/' + characterId)
        .then((result) => {
          this.$router.push({
            name: 'CharacterList'
          })
          this.fetchCharacterList()
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  },
  created () {
    this.fetchCharacterList()
  }
}
</script>
