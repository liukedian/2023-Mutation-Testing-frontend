<template>
  <myNavigation></myNavigation>
  <my-home></my-home>
</template>

<script>
import myNavigation from './components/myNavigation.vue'
import myHome from './views/Home.vue'

export default {
  name: 'App',
  components: {
    myNavigation,
    myHome,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
