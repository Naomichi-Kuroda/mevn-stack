<template>
  <section class="app">
    <app-header/>
    <main class="app-main my-5">
      <b-container fruid>
        <router-view/>
      </b-container>
    </main>
    <app-footer/>
  </section>
</template>

<style scoped lang="scss">
  .app {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    &-main {
      flex: 1;
    }
  }
</style>

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
