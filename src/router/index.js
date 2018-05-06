import Vue from 'vue'
import Router from 'vue-router'
import CharacterList from '@/components/CharacterList'
import CharacterDetail from '@/components/CharacterDetail'
import CharacterCreation from '@/components/CharacterCreation'
import EditCharacter from '@/components/EditCharacter'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'CharacterList',
      component: CharacterList
    },
    {
      path: '/show-character/:id',
      name: 'CharacterDetail',
      component: CharacterDetail
    },
    {
      path: '/character-creation',
      name: 'CharacterCreation',
      component: CharacterCreation
    },
    {
      path: '/edit-character/:id',
      name: 'EditCharacter',
      component: EditCharacter
    }
  ]
})
