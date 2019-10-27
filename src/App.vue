<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Jumbotron />
    <Speaking />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Jumbotron from './components/Jumbotron.vue'
import Speaking from './components/Speaking.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld,
    Jumbotron,
    Speaking
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
