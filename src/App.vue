<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Jumbotron />
    <Speaking />
    <Writing />
    <Building />
    <Contact />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Jumbotron from './components/Jumbotron.vue'
import Speaking from './components/Speaking.vue'
import Writing from './components/Writing.vue'
import Building from './components/Building.vue'
import Contact from './components/Contact.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld,
    Jumbotron,
    Speaking,
    Writing,
    Building,
    Contact
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
