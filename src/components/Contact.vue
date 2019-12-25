<template>
  <div class="contact">
    <b-jumbotron bg-variant="info" text-variant="white" fluid>
        <template v-slot:header>Let's work together</template>

        <template v-slot:lead>
        Working on something interesting? Talk to me.
        </template>

        <div class="social-media">
            <b-link href="https://github.com/loopDelicious" target="_blank"><font-awesome-icon :icon="['fab', 'github']" size="2x" /></b-link>
            <b-link href="https://twitter.com/petuniagray" target="_blank"><font-awesome-icon :icon="['fab', 'twitter']" size="2x" /></b-link>
            <b-link href="https://www.linkedin.com/in/joyce-lin/" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin']" size="2x" /></b-link>
        </div>

    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.jumbotron {
  background: url("https://apod.nasa.gov/apod/image/1912/ElectricMilkyWay_Pedretti_1920.jpg") no-repeat center center;
  background-size: cover;
  color: lightgray;
  margin: 10px 0 0 0;
}
.social-media a {
  color: darkgray;
  margin: 20px;
}
.social-media a:hover {
  opacity: 0.6;
}
</style>