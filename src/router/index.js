import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import CharacterList from '@/components/CharacterList'
import CharacterDetail from '@/components/CharacterDetail'
import CharacterCreation from '@/components/CharacterCreation'
import CharacterEditing from '@/components/CharacterEditing'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
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
      name: 'CharacterEditing',
      component: CharacterEditing
    }
  ]
})
