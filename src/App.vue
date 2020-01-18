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

<style lang="scss">
// Import custom SASS variable overrides, or alternatively
// define your variable overrides here
// possible variables to override: node_modules/bootstrap/scss/_variables.scss
// @import './custom.scss';
$green: mediumaquamarine;

// Import Bootstrap and BootstrapVue source SCSS files
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';

// General style overrides and custom classes
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  background-color: whitesmoke;
}
</style>
