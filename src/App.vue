<template>
  <section class="app">
    <app-header/>
    <b-container fruid>
      <main class="my-5">
        <router-view/>
      </main>
    </b-container>
    <app-footer/>
  </section>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>
