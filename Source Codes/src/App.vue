<template>
  <div id="app">
    <app-header />
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'App',
  components: {
    'app-header': Header
  },
}
</script>

<style>

</style>
